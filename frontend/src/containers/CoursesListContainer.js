import React from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../reducers/courses';
import CoursesList from '../components/courses/CoursesList';

class CoursesListContainer extends React.Component {
    componentDidMount() {
        this.props.fetchCourses();
    }
    render() {
        if (!this.props.loaded) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div>
                <CoursesList items={this.props.items} />
            </div>
        )
    }
}

export default connect(
    state => ({
        loaded: state.courses.loaded,
        items: state.courses.items
    }),
    { fetchCourses }
)(CoursesListContainer);