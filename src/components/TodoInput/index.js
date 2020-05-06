import React, { Component } from 'react'
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
            inputValue: 'xxx'
        }
        // 当调用的函数为普通函数写法时，需要通过 bind 来绑定内部的 this，也可以通过bind可函数传递参数
        // 因为每次重新渲染页面都会再执行一次render函数，而constructor只在组件创建时执行一次，在constructor中进行函数this绑定可以避免重复绑定
        // this.handleAddClick = this.handleAddClick.bind(this, 124)
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    // 使用箭头函数保证函数内this指向组件，
    // 如不用箭头函数，则在调用函数时需通过.bind(this)来绑定this
    handleAddClick = (id) => {
        console.log(this.state, id)
    }
    // handleAddClick(id) {
    //     console.log(this.state, id)
    // }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />

                {/* 第一种传参的方式：在箭头函数内调用指定方法传参，因为若直接在 onClick={} 中传参，则在渲染时就已经执行了方法，而包裹在箭头函数内部的方法在点击时才执行 */}
                {/* 第二种传参的方式: 通过.bind(this, arguments)的形式传递参数，此时方法声明可以不用箭头函数，也不需要在constructor中再次绑定this，缺点是每次重新渲染时都会再执行一次bind绑定 */}
                <button onClick={this.handleAddClick}>{this.props.btnText}</button>
            </div>
        )
    }
}
