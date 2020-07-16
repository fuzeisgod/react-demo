import React, { Component } from 'react'

import { Layout, Menu } from 'antd'

import { withRouter } from 'react-router-dom'

import logo from './logo.png'
import './frame.less'

const { Header, Content, Sider } = Layout

// 把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上
@withRouter
class Frame extends Component {
    onMenuClick = ({ key }) => {
        this.props.history.push(key)
    }
    render() {
        console.log(this.props)
        return (
            <Layout style={{ minHeight: '100%' }}>
                <Header className="header zx-header">
                    <div className="zx-logo">
                        <img src={logo} alt="fuzzy" />
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            selectedKeys={[this.props.location.pathname]}
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