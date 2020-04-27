import React, { Component } from 'react'
import { render } from 'react-dom'

// 定义组件的第二种方式，使用类继承 React.Component
class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>类组件</h1>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

// 类组件渲染的原理
// const app = new App({
//     title: '这是类组件'
// }).render()

// render 是 reactDom 提供的一个方法，这个方法通常只会调用一次
render(
    <App title='这是类组件' />,
    document.querySelector('#root')
)