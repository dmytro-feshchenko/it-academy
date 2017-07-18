import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Class CourseDetailsContainer
 * Shows general information about course and a list of lessons
 * to a user.
 * If user is already enrolled to the course - shows correspond links
 * to the playable lessons and tasks, also displays a progress of passing lessons.
 * Otherwise, shows a conditionals for enrolling.
 */
class CourseDetailsContainer extends React.Component {
    render() {
        return (
            <div>Course details container</div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetailsContainer);