import React from 'react';
import { connect } from 'react-redux';
import SearchCoursesBar from '../components/SearchCoursesBar';

class HomePageContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="gr-12">
                            <SearchCoursesBar />
                        </div>
                    </div>
                    <div className="row">
                        <div className="gr-12" id="header">
                            I'm the header, 12 columns width
                        </div>
                        <div className="gr-8 gr-12@xs" id="content">
                            I'm the content, 8 columns width, but 12 on mobile
                        </div>
                        <div className="gr-4 gr-12@xs" id="sidebar">
                            I'm the sidebar, 4 columns width, but 12 on mobile
                        </div>
                    </div>
                    <div className="row">
                        <div className="gr-12">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({

    })
)(HomePageContainer);