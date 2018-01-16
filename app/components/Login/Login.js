import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*const Login = ({loginStatus, onLoginClick}) => {
    let input_username;
    let input_password;

    if (loginStatus) {
        /!*return (
            <Home/>
        )*!/
        return <Redirect to='/demoHome'/>
    }

    return (

    <form onSubmit={e => {
        e.preventDefault();
        if (!input_username.value.trim()||!input_password.value.trim()) {
            return
        }
        onLoginClick({"username": input_username.value,"password":input_password.value});
        input_username.value = '';
        input_password.value = '';
    }}>
        <input ref={node => {
            input_username = node
        }} />
        <input ref={node => {
            input_password = node
        }} />
        <button type="submit">
            Login
        </button>
    </form>
    )
};*/

/*class Login extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            username:'',
            password:''
        }
    }

    handleValueChange(field, value) {
        this.setState({
            [field]: value
        })
    }

    onLoginClick(e) {
        e.preventDefault();
        const {username,password} = this.state;
        this.props.onLoginClick({
            username: username,
            password: password
        })
    }

    render() {
        const {username,password} = this.state;

        return (
            <form onSubmit={e => this.onLoginClick(e)}>
                <input type="text" value={username}
                       onChange={e => this.handleValueChange('username', e.target.value)}/>
                <input type="text" value={password}
                       onChange={e => this.handleValueChange('password', e.target.value)} />
                <button type="submit">
                    Login
                </button>
            </form>
        )
    }
}*/

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class LoginPage extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onLoginClick({
                    username: this.props.form.getFieldsValue().username,
                    password: this.props.form.getFieldsValue().username,
                });
                // this.props.history.push("/");
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}

const Login = Form.create()(LoginPage);

Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    loginStatus: PropTypes.bool
};
Login.contextTypes = {
    router: PropTypes.object.isRequired
};
export default Login