import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Class PlayLessonContainer
 * Represents interactive lesson from one course which contains
 * article, videos, attached tasks, etc.
 */
class PlayLessonContainer extends React.Component {
    render() {
        return (
            <div>
                Lesson container
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayLessonContainer);