import React from 'react';
import { Embed } from 'semantic-ui-react';

export default class YouTubeVideo extends React.Component {
    render() {
        return (
            <div className="video video_source-youtube">
                <Embed
                    id='O6Xo21L0ybE'
                    placeholder='/assets/images/image-16by9.png'
                    source='youtube'
                />
            </div>
        )
    }
}