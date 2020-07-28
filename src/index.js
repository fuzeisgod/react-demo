import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import { render } from 'react-dom'

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { mainRoutes } from './routes'

import App from './App'
import './index.less'

import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'


import { Provider } from 'react-redux'
import store from './store'

render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <Router>
                <Switch>
                    <Route path="/admin" render={
                        (routerProps) => {
                            // TODO:权限，需要登录才能访问 /admin
                            return <App {...routerProps} />
                        }
                    } />
                    {
                        mainRoutes.map(route => {
                            return <Route key={route.pathName} path={route.pathName} component={route.component} />
                        })
                    }
                    {/* 添加了 exact 属性，只有完全匹配路由 '/' 时，才会跳转至路由 '/admin' */}
                    <Redirect to="/admin" exact from="/" />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </ConfigProvider>
    </Provider>,
    document.querySelector('#root')
)