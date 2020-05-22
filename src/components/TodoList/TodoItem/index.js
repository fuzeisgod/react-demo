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

    // 在此生命周期函数中，可以通过返回一个布尔值控制组件是否进行更新render，可以通过判断props或state是否发生改变来决定此次更新是否进行，避免了重复刷新数据未改变的组件。
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps)
        // console.log(this.props)
        // 当下一次render时要改变的props值和当前props值不一样时，才返回true，执行组件刷新，如果props值未发生改变，则返回false，阻止重复刷新。
        // nextProps是下一次传入的props值，nextState是下一次组件自身状态
        return nextProps.completed !== this.props.completed
    }

    constructor() {
        super()
        this.state = {
            completedText: ''
        }
    }

    // getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
    static getDerivedStateFromProps(props) {
        return {
            completedText: props.completed ? '完成' : '未完成'
        }
    }


    render() {
        console.log(`TodoItem ${this.props.title} render`)
        const {
            completed,
            title
        } = this.props
        return (
            <div>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={this.handleCheckboxChange}
                />
                <span>{title} {this.state.completedText}</span>
            </div>
        )
    }
}
