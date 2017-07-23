import React from 'react';

/**
 * Component CoursesList
 * Represents a list with courses
 * Depends on current view should show a list or
 * a grid
 */
class CoursesList extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map((item, key) => (
                    <div key={key}>{item.name}</div>
                ))}
            </div>
        )
    }
}

export default CoursesList;