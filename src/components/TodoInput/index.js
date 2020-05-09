// react 里面通过 ref 来获取组件或者 dom 元素，要使用 ref 之前必须调用 react.createRef 方法来创建一个 ref
// react 引出的，大写的是类，小写的是方法
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    static propTypes = {
        btnText: PropTypes.string
    }
    // 通过类的静态属性 defaultProps 来设置参数的默认值，此值优先级次于传入的props
    static defaultProps = {
        btnText: '添加Todo'
    }

    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
        // 在 constructor 里面创建 ref
        this.inputDom = createRef()
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    handleKeyUp = (e) => {
        if (this.state.inputValue === '') {
            return
        }
        if (e.keyCode === 13) {
            this.props.addTodo(this.state.inputValue)
            this.setState({
                inputValue: ''
            })
        }
    }

    handleAddClick = () => {
        if (this.state.inputValue === '') {
            return
        }
        this.props.addTodo(this.state.inputValue)
        this.setState({
            inputValue: ''
        }, () => {
            this.inputDom.current.focus();
        })
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                    ref={this.inputDom}
                />
                <button onClick={this.handleAddClick}>{this.props.btnText}</button>
            </div>
        )
    }
}
