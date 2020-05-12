import React, { Component } from 'react'
// 定义一个空函数
const noop = () => { }

export default class TodoItem extends Component {
    handleCheckboxChange = () => {
        // this.props.onCompletedChange && this.props.onCompletedChange(this.props.id)

        // 解构可以给函数设置初始值，如果没有传函数时会执行初始的空函数
        const {
            onCompletedChange = noop,
            id
        } = this.props
        onCompletedChange && onCompletedChange(id)
    }
    // 
    shouldComponentUpdate(){
        return true
    }
    render() {
        console.log('TodoItem render')
        const {
            isCompleted,
            title
        } = this.props
        return (
            <div>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={this.handleCheckboxChange}
                />
                <span>{title} {isCompleted ? '完成' : '未完成'}</span>
            </div>
        )
    }
}
