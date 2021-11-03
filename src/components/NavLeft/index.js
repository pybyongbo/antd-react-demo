import React from 'react';
import MenuConfig from '../../config/index'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.css'
const { SubMenu } = Menu;


export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }

    //菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div className="sidebarmenu">
                <div className="logo">
                    <h1>Antd Demo Project</h1>
                </div>
                <Menu theme="dark" >
                    {this.state.menuTreeNode}
                </Menu>
            </div>

        )
    }
}