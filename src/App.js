import React, { Component, Fragment } from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '待办事项列表',
            desc: '描述文本',
            article: '<div>saihduihasa<i>asdgiyasg</i></div>',
            todos: [{
                id: 1,
                title: '吃饭',
                isCompleted: true
            }, {
                id: 2,
                title: '睡觉',
                isCompleted: false
            }]
        }
    }

    addTodo = (todoTitle) => {
        const newTodos = [...this.state.todos]
        newTodos.push({
            id: Math.random(),
            title: todoTitle,
            isCompleted: false
        })
        this.setState({
            todos: newTodos
        })
    }

    render() {
        return (
            <Fragment>
                <TodoHeader desc={this.state.desc} x={1} y={2}>
                    <i>{this.state.title}</i>
                </TodoHeader>
                <TodoInput btnText="add" addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} />
                <Like />
            </Fragment>
        )
    }
}
