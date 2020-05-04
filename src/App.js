import React, { Component, Fragment } from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList
} from './components'

export default class App extends Component {
    render() {
        return (
            // jsx 语法只能有一个根标签，react提供了一个Fragment标签表示空标签（需要先引入）
            <Fragment>
                <TodoHeader />
                <TodoInput />
                <TodoList />
            </Fragment>
        )
    }
}
