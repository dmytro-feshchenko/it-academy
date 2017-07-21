import React from 'react';
import { Input, Button } from 'semantic-ui-react'

class SubscribeForm extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="subscribe-form">
                    <div className="row">
                        <div className="gr-9 gr-12@xs">
                            <Input placeholder="Enter Email Address" fluid={true} />
                        </div>
                        <div className="gr-3 gr-12@xs">
                            <Button primary fluid={true}>Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubscribeForm;