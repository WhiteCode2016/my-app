import React, { Component } from "react";
import { Link,Route,Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import CoffeeList from "./components/CoffeeList";
import Category from "./demo/Category";
import Products from "./demo/Products";
import Home from "./views/Home";
import Log from "./views/Log";
import CommonSider from "./components/common/CommonSider";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
    constructor() {
        super();
        this.state = { collapsed: false };
    }

    handleToggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline"
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                    >
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/log">Log</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/coffeeDetail">coffeeList</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.handleToggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/log" component={Log} />
                            <Route path="/coffeeDetail" component={CoffeeList} />
                        </Switch>
                    </Content>
                </Layout>

            </Layout>
        );
    }

   /*render() {
       return (
           <div>
               <nav className="navbar navbar-light">
                   <ul className="nav navbar-nav">
                       <li><Link to="/">Homes</Link></li>
                       <li><Link to="/category">Category</Link></li>
                       <li><Link to="/products">Products</Link></li>

                   </ul>
               </nav>
                <Switch>
               <Route exact={true} path="/" component={Home}/>
               <Route path="/category" component={Category}/>
               <Route path="/products" component={Products}/>
                </Switch>
               {/!*<Route path="/:id" render = {()=> (<p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>)} />*!/}

           </div>
       )
   }*/

}

export default App