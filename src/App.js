import React, { Component, Fragment } from 'react'

import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'

export default class App extends Component {
    // 第一种定义组件内部数据的方式
    // state = {
    //     title: '待办事项列表1'
    // }

    // 第二种定义组件内部数据的方式，state是类组件独有的。
    constructor() {
        // 继承类中的构造函数必须调用 `super（...）`，(!)并且在使用 `this` 之前执行它。
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
        // this.setState({
        //     // 注意：这里不使用push因为push返回的是新数组的长度，而不是返回一个数组
        //     todos: this.state.todos.concat({
        //         id: Math.random(),
        //         title: todoTitle,
        //         isCompleted: false
        //     })
        // })

        
        // 也可以拷贝一个新数组，进行push修改
        // const newTodos = this.state.todos.slice()
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
            // jsx 语法只能有一个根标签，react提供了一个Fragment标签表示空标签（需要先引入）
            // 也可以使用空标签<></>来作为根标签
            <Fragment>
                {/* dangerouslySetInnerHTML可以直接在 React 中设置 HTML */}
                {/* 当你想设置 dangerouslySetInnerHTML 时，需要向其传递包含 key 为 __html 的对象 */}
                {/* 第一层花括号指内部包含的是一个javascript对象，第二层花括号指该对象 */}
                <div dangerouslySetInnerHTML={{ __html: this.state.article }}></div>

                {
                    this.state.todos.map(todo => {
                        return <div key={todo.id}>{todo.title}</div>
                    })
                }
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
