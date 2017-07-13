import React, { Component } from 'react';
import { connect } from 'react-redux';
import { redirectToErrorPageAfterFail } from '../reducers/authentication';

/**
 *
 * @param state
 */
const mapStateToProps = (state) => ({
    loading: state.authentication.loading,
    isAuthenticated: state.authentication.isAuthenticated
});

/**
 * @type {{redirectToErrorPageAfterFail: redirectToErrorPageAfterFail}}
 */
const mapDispatchToProps = {
    redirectToErrorPageAfterFail
};

/**
 *
 * @param Wrapped
 */
const authRoute = (Wrapped) => connect(mapStateToProps, mapDispatchToProps)(class extends React.Component {
    componentDidMount() {

    }
    render() {
        const { loading, isAuthenticated } = this.props;

        if (loading && !isAuthenticated) {
            return <div>
                Loading...
            </div>
        }
        return <Wrapped {...this.props} />
    }
});

export default authRoute;