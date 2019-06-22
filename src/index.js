import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'whatwg-fetch';
import { INITIAL_STATE } from './config/Initstate';
import createFetch from "./util/createFetch";
import getCookie from './util/getCookie';
import UniversalRouter from 'universal-router';
import configureStore from "./store/configureStore";
import routes from './routes';
import App from "./component/App/App";
import history from "./util/history";
import queryString from 'query-string';




const context = {
    // Universal HTTP client
    fetch: createFetch(fetch, getCookie),
    // Initialize a new Redux store
    store: configureStore(INITIAL_STATE, {
        history,
        fetch: createFetch(fetch, getCookie),
    }),
    storeSubscription: null,
};


const router = new UniversalRouter(routes, {
    resolveRoute(context, params) {
        const route = context.route;
        //debugger
        if (typeof route.load === 'function') {
            return route.load().then(action => action.default(context, params));
        }
        if (typeof route.action === 'function') {
            return route.action(context, params);
        }
        return undefined;
    },
});



const render = async (location) => {
    context.pathname = location.pathname;
    context.query = queryString.parse(location.search);
    const element = await router.resolve(context);
    ReactDOM.render(<App context={context}>{element.component}</App>, document.getElementById('root'));

};

// Listening for the history changes to the current location
history.listen(render);

// Initial Rendering for the initial location
render(history.location);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
