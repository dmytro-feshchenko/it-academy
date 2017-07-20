import React from 'react';

class SubscribeForm extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="subscribe-form">
                    <div className="row">
                        <div className="gr-9 gr-12@xs">
                            <input type="text" placeholder="Enter Email Address" />
                        </div>
                        <div className="gr-3 gr-12@xs">
                            <a href="#" className="button">Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubscribeForm;