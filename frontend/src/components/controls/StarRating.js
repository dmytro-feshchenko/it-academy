import React from 'react';
import { Rating } from 'semantic-ui-react';

/**
 * Star rating
 * Defines rating bar with stars
 * The stars are selectable.
 */
export default class StarRating extends React.Component {
    render() {
        return (
            <div className="star-rating">
                <Rating maxRating="5" />
            </div>
        )
    }
}