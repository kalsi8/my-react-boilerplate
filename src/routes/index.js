import { __DEV__ } from '../config/Initstate';

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
    path: '/',

    // Keep in mind, routes are evaluated in order
    children: [{
        path: '/',
        title: "Digital Content",
        load: () => import(/* webpackChunkName: 'GoldLanding' */ './DCLanding'),
    },],
    async action({ next }) {
        // Execute each child route until one of them return the result
        const route = await next();
        // Provide default values for title, description etc.
        // route.title = route.title || '';
        // route.description = route.description || '';

        return route;
    },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
    routes.children.unshift({
        path: '/error',
       action: require('./ErrorPage').default,
    });
}

export default routes;
