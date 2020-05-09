import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
    // 对传入的 props 进行校验
    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool.isRequired
        })).isRequired,
        onCompletedChange: PropTypes.func
    }

    render() {
        return (
            <div>
                {
                    this.props.todos.map(todo => {
                        return (
                            <TodoItem
                                key={todo.id}
                                // ES6/ES2015 委员会设计扩展运算符时，只设计把它用在数组上。它能在对象字面量（例如我们的 props 对象）上使用，归功于 React 扩展了标准著作权归作者所有。
                                // 这里是react扩展的ES6的语法，可以扩展传入的props对象，并在解析JSX语法时拆解为[key]=[value]的形式
                                {...todo}
                                onCompletedChange={this.props.onCompletedChange}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
