import React from 'react';
import PropTypes from 'prop-types';
import './ErrorPage.scss';

class ErrorPage extends React.Component {
    
    static propTypes = {
        error: PropTypes.shape({
            name: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            stack: PropTypes.string.isRequired,
        }),
    };

    static defaultProps = {
        error: null,
    };

    render() {
        const { error } = this.props;
        return (
            <React.Fragment>
                <h1>Error</h1>
                <p>Sorry, a critical error occurred on this page.</p>
                <div className={'hide'}>
                    <h1>{error.name}</h1>
                    <pre>{error.stack}</pre>
                </div>
            </React.Fragment>
        );
    }
}

export { ErrorPage as ErrorPageWithoutStyle };
export default (ErrorPage);