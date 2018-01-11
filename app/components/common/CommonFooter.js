import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class CommonFooter extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
            </Footer>
        )
    }
}