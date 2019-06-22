import React from 'react';
import PropTypes from 'prop-types';
import {
    Provider as ReduxProvider
} from 'react-redux';

// const ContextType = {
//     // Enables critical path CSS rendering
//     // https://github.com/kriasoft/isomorphic-style-loader
//     // Universal HTTP client
//     query: PropTypes.object,
//     headers: PropTypes.object,
//     fetch: PropTypes.func.isRequired,
//     pathname: PropTypes.string.isRequired,
//     store: PropTypes.func,
//     storeSubscription: PropTypes.bool,
//     // Integrate Redux
//     // http://redux.js.org/docs/basics/UsageWithReact.html
//     ...ReduxProvider.childContextTypes,
// };

class App extends React.PureComponent {

    // static propTypes = {
    //     context: PropTypes.shape(ContextType).isRequired,
    //     children: PropTypes.element.isRequired,
    // };

    // static childContextTypes = ContextType;

    // getChildContext() {
    //     return this.props.context;
    // }

    render() {

        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        //return React.Children.only(this.props.children);
        return <ReduxProvider {...this.props.context}>
                {this.props.children}
        </ReduxProvider>
    }
}

export default App;
