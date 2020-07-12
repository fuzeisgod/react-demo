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
    state = {
        isLogin: false
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/article">文章</Link></li>
                    <li><Link to="/users">用户</Link></li>
                </ul>
                <Switch>
                    <Route path="/home" render={(routeProps) => { return <Home {...routeProps} /> }} />
                    <Route component={Article} path="/article" exact />
                    <Route component={ArticleDetail} path="/article/:id" />
                    <Route path="/users" render={
                        (routeProps) => {
                            return this.state.isLogin ? <Users {...routeProps} /> : <div>请登录</div>
                        }
                    } />
                    <Route component={NotFound} path="/404" />
                    <Redirect to="/home" from="/" exact />
                    <Redirect to="/404" />
                </Switch>
            </div>
        )
    }
}
