import React, { Component } from 'react';
import { Link }from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

let coffeeList;
export default class CommonSider extends Component {
    constructor(props) {
        super(props);
        coffeeList=props.coffeeMenus.map((coffeeMenu) => {
            return (
                <Menu.Item key={coffeeMenu.id}><Link to={`${props.match.url}/${coffeeMenu.id}`}>{coffeeMenu.coffeeName}</Link></Menu.Item>
            )
        });
    }
    render() {
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    // defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                >
                    <SubMenu key="sub1" title={<span>高原系列</span>}>
                       {/* <Menu.Item key="1"><Link to="/coffeeDetail/1">坦桑尼亚</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/coffeeDetail/2">肯尼亚</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/coffeeDetail/3">危地马拉</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/coffeeDetail/4">哥伦比亚</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/coffeeDetail/5">埃塞俄比亚</Link></Menu.Item>*/}
                        {coffeeList}
                    </SubMenu>
                    <SubMenu key="sub2" title={<span>重度烘焙</span>}></SubMenu>
                    <SubMenu key="sub3" title={<span>中度烘焙</span>}></SubMenu>
                    <SubMenu key="sub4" title={<span>轻度烘焙</span>}></SubMenu>
                    <SubMenu key="sub5" title={<span>精品咖啡豆</span>}></SubMenu>
                    <SubMenu key="sub6" title={<span>日式烘焙机</span>}></SubMenu>
                </Menu>
            </Sider>
        )
    }
}