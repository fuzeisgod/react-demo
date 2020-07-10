import React, { Component } from 'react'
import { Route, NavLink as Link, Redirect, Switch } from 'react-router-dom'
import {
    Article,
    ArticleDetail,
    Home,
    Users,
    NotFound
} from './views'
export default class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/article">文章</Link></li>
                    <li><Link to="/users">用户</Link></li>
                </ul>
                <Switch>
                    <Route component={Home} path="/home" />
                    <Route component={Article} path="/article" exact />
                    <Route component={ArticleDetail} path="/article/:id" />
                    <Route component={Users} path="/users" />
                    <Route component={NotFound} path="/404" />
                    <Redirect to="/home" from="/" exact/>
                    <Redirect to="/404"/>
                </Switch>
            </div>
        )
    }
}
