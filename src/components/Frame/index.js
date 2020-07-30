import React, { Component } from 'react'

import { Layout, Menu, Dropdown, Avatar, Badge } from 'antd'

import { DownOutlined } from '@ant-design/icons';

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'

import logo from './logo.png'
import './frame.less'

import { logout } from '../../actions/login'

const { Header, Content, Sider } = Layout

const mapStateToProps = state => {
    return {
        notificationCount: state.notification.list.filter(item => item.hasRead === false).length,
        avatar: state.login.avatar,
        displayName: state.login.displayName
    }
}


// 把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
@connect(mapStateToProps, { logout })
@withRouter
class Frame extends Component {
    onMenuClick = ({ key }) => {
        this.props.history.push(key)
    }

    onDropDownMenuClick = ({ item, key, keyPath, domEvent }) => {
        if (key === '/logout') {
            this.props.logout()
        } else {
            this.props.history.push(key)
        }
    }

    render() {
        // 在 this 中定义的 jsx 代码段中的方法要在代码段 之前 先声明。
        const menu = (
            <Menu onClick={this.onDropDownMenuClick}>
                <Menu.Item
                    key="/admin/notifications"
                >
                    <Badge count={this.props.notificationCount} offset={[20, 7]}>
                        通知中心
                </Badge>
                </Menu.Item>
                <Menu.Item
                    key="/admin/setting"
                >
                    个人设置
            </Menu.Item>
                <Menu.Item
                    key="/logout"
                >
                    退出登录
            </Menu.Item>
            </Menu>
        );

        const selectedKeyArr = this.props.location.pathname.split('/')
        selectedKeyArr.length = 3

        return (
            <Layout style={{ minHeight: '100%' }}>
                <Header className="header zx-header">
                    <div className="zx-logo">
                        <img src={logo} alt="fuzzy" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <Badge dot={Boolean(this.props.notificationCount)}>
                            <Dropdown overlay={menu}>
                                <div>
                                    <Avatar src={this.props.avatar} />
                                    <span>欢迎您，{this.props.displayName}</span>
                                    <DownOutlined />
                                </div>
                            </Dropdown>
                        </Badge>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            selectedKeys={[selectedKeyArr.join('/')]}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.onMenuClick}
                        >
                            {
                                this.props.menus.map(item => {
                                    return (<Menu.Item key={item.pathName}>
                                        <item.icon />
                                        {item.title}
                                    </Menu.Item>)
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '16px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: 0
                            }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Frame