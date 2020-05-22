import React, { Component, Fragment } from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

import { getTodos } from './services'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '待办事项列表',
            desc: '描述文本',
            article: '<div>saihduihasa<i>asdgiyasg</i></div>',
            todos: [],
            isLoading: false
        }
    }

    getData = () => {
        this.setState({
            isLoading: true
        })
        getTodos().then(res => {
            if (res.status === 200) {
                this.setState({
                    todos: res.data
                })
            } else {
                // 处理错误
            }
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }

    componentDidMount() {
        this.getData()
    }

    addTodo = (todoTitle) => {
        const newTodos = [...this.state.todos]
        newTodos.push({
            id: Math.random(),
            title: todoTitle,
            completed: false
        })
        this.setState({
            todos: newTodos
        })
        // 先 post -> 将 post 的结果 push 到 state 中，如果后端未返回结果，就重新取一次结果
    }

    onCompletedChange = (id) => {
        // console.log('onCompletedChange', id)
        this.setState((prevState) => {
            return {
                todos: prevState.todos.map(todo => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed
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
                {
                    this.state.isLoading ?
                        <div>Loading...</div> :
                        <TodoList
                            todos={this.state.todos}
                            onCompletedChange={this.onCompletedChange}
                        />
                }
                <Like />
            </Fragment>
        )
    }
}
