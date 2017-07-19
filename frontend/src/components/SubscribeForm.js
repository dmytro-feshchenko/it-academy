import React from 'react';

const SubscribeForm = () => (
    <div className="subscribe-form">
        <div className="row">
            <div className="small-9 columns">
                <input type="text" placeholder="Enter Email Address" />
            </div>
            <div className="small-3 columns">
                <a href="#" className="button">Subscribe</a>
            </div>
        </div>
    </div>
);

export default SubscribeForm;