import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import DemoHome from "../components/Demo/DemoHome";
import Category from "../components/Demo/Category";
import Products from "../components/Demo/Products";
import ToDoListApp from "../components/Todo/ToDoApp";
import UserList from "../components/UserManage/UserList";
import UserAdd from "../components/UserManage/UserAdd";
import HomePage from "../components/HomePage";
import {userIsAuthenticated} from "../auth";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state =  {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { match } = this.props;
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu
                            key="demo"
                            title={<span>DEMO</span>}
                        >
                            <Menu.Item key="demoHome"><Link to={`${match.url}/demoHome`} >Homes</Link></Menu.Item>
                            <Menu.Item key="category"><Link to={`${match.url}/category`}>Category</Link></Menu.Item>
                            <Menu.Item key="products"><Link to={`${match.url}/products`}>Products</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="app"
                            title={<span>APP</span>}
                        >
                            <Menu.Item key="home"><Link to={`${match.url}`}>Home</Link></Menu.Item>
                            <Menu.Item key="toDoListApp"><Link to={`${match.url}/toDoListApp`}>待办事项</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="user"
                            title={<span>USER MANAGE</span>}
                        >
                            <Menu.Item key="user-list"><Link to={`${match.url}/user/list`}>user list</Link></Menu.Item>
                            <Menu.Item key="user-add"><Link to={`${match.url}/user/add`}>user add</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Switch>
                            <Route path={`${match.url}/demoHome`}  component={DemoHome} />
                            <Route path={`${match.url}/category`} component={Category} />
                            <Route path={`${match.url}/products`} component={Products} />

                            <Route exact path={`${match.url}`} component={HomePage}/>
                            <Route path={`${match.url}/toDoListApp`} component={userIsAuthenticated(ToDoListApp)}/>

                            <Route path={`${match.url}/user/list`} component={UserList} />
                            <Route path={`${match.url}/user/add`} component={UserAdd} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home