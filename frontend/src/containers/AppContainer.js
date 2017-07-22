import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AppContainer extends React.Component {
    render() {
        return (
            <div className="page">
                <Header />
                <div className="page__content">{this.props.children}</div>
                <Footer />
            </div>
        )
    }
}

export default connect(
    state => ({

    })
)(AppContainer);