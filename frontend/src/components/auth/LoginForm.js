import React from 'react';
import { Button, Checkbox, Form, Icon, Message } from 'semantic-ui-react';

/**
 * Form for log in
 */
export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <Message
                    attached
                    header='Welcome to our site!'
                    content='Fill out the form below to login to your account'
                />
                <Form className='attached fluid segment'>
                    <Form.Input label='Username' placeholder='Username' type='text' />
                    <Form.Input label='Password' type='password' />
                    <Button color='blue'>Login</Button>
                </Form>
                <Message attached='bottom' warning>
                    <Icon name='help' />
                    Don't registered yet?&nbsp;<a href='#'>Sign-Up here</a>&nbsp;instead.
                </Message>
            </div>
        )
    }
}