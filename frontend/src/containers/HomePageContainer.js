import React from 'react';
import { connect } from 'react-redux';

class HomePageContainer extends React.Component {
    render() {
        return (
            <div>
                Home page
            </div>
        )
    }
}

export default connect(
    state => ({

    })
)(HomePageContainer);