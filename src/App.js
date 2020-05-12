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

    onCompletedChange = (id) => {
        // console.log('onCompletedChange', id)
        this.setState((prevState) => {
            return {
                todos: prevState.todos.map(todo => {
                    if (todo.id === id) {
                        todo.isCompleted = !todo.isCompleted
                    }
                    return todo
                })
            }
        })
    }

    render() {
        return (
            <Fragment>
                <TodoHeader desc={this.state.desc} x={1} y={2}>
                    <i>{this.state.title}</i>
                </TodoHeader>
                <TodoInput btnText="add" addTodo={this.addTodo} />
                <TodoList
                    todos={this.state.todos}
                    onCompletedChange={this.onCompletedChange}
                />
                <Like />
            </Fragment>
        )
    }
}
