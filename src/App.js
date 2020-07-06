import React, { Component } from 'react'
import {
    Article,
    Home,
    Users
} from './views'
export default class App extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>首页</li>
                    <li>文章</li>
                    <li>用户</li>
                </ul>
                <Article />
                <Home />
                <Users />
            </div>
        )
    }
}
