import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import CoffeeDetail from "./CoffeeDetail";
import CommonFooter from "../common/CommonFooter";
import CommonSider from "../common/CommonSider";
const { Header, Content, Sider } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup

const coffeeMenus = [
    { id: 1, coffeeName: '坦桑尼亚', coffeePrice: '$68'},
    { id: 2, coffeeName: '肯尼亚', coffeePrice: '$78'},
    { id: 3, coffeeName: '危地马拉', coffeePrice: '$88'},
    { id: 4, coffeeName: '哥伦比亚', coffeePrice: '$98'},
    { id: 5, coffeeName: '埃塞俄比亚', coffeePrice: '$108'},
];

let coffeeList;

class CoffeeList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <Content style={{ padding: '0 50px' }}>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        {/* 侧边菜单栏 */}
                        <CommonSider coffeeMenus={coffeeMenus} {...this.props}/>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Route exact path={`${this.props.match.url}`} render={() => (
                                <div>CoffeeList Default View</div>
                            )} />
                            {/*<Route path={`${this.props.match.path}/:id`} component={CoffeeDetail} />*/}
                            <Route path={`${this.props.match.path}/:id`} render={ (props) => <CoffeeDetail data= {coffeeMenus} {...props} />} />
                        </Content>
                    </Layout>
                </Content>
                {/* 页脚 */}
                <CommonFooter />
            </Layout>
        )
    }
}

export default CoffeeList