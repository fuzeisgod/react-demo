import React from 'react'
import { render } from 'react-dom'

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { mainRouter } from './routes'

import App from './App'
import './index.less'

render(
    <Router>
        <Switch>
            <Route path="/admin" render={
                (routerProps) => {
                    // TODO:权限，需要登录才能访问 /admin
                    return <App {...routerProps} />
                }
            } />
            {
                mainRouter.map(route => {
                    return <Route key={route.pathName} path={route.pathName} component={route.component} />
                })
            }
            {/* 添加了 exact 属性，只有完全匹配路由 '/' 时，才会跳转至路由 '/admin' */}
            <Redirect to="/admin" exact from="/" />
            <Redirect to="/404" />
        </Switch>
    </Router>,
    document.querySelector('#root')
)