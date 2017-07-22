import React from 'react';
import { Input } from 'semantic-ui-react';

export default class SearchCoursesBar extends React.Component {
    render() {
        return (
            <div className="search-courses-bar">
                <Input placeholder="Search any course..." fluid={true} />
            </div>
        )
    }
}