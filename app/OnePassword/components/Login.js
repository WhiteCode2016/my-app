import React, { propTypes } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {addTodo} from "../../TodoList/actions";
const FormItem = Form.Item;

const Login = ({onLoginClick}) => {
    let input_username;
    let input_password;
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
};

/*Login.propTypes = {
    onclick: PropTypes.func.isRequired
};*/

export default Login