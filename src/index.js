import React, { Component } from 'react'
import { render } from 'react-dom'

// 定义组件的第二种方式，使用类继承 React.Component
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>类组件！</h1>
//                 <p>{this.props.title}</p>
//             </div>
//         )
//     }
// }

// React.createElement 是一个方法，用于创建元素，可以有很多的参数，但是前两个是固定的：
// 第一个可以理解为标签名
// 第二个可以理解为标签的属性
// 剩下的，可以继续写子元素
class App extends Component {
    render() {
        return (
            React.createElement(
                'div',
                {},
                React.createElement(
                    'h1',
                    {},
                    '类组件！'
                ),
                React.createElement(
                    'p',
                    {},
                    this.props.title
                )
            )
        )
    }
}


// render 是 reactDom 提供的一个方法，这个方法通常只会调用一次
render(
    <App title='这是类组件' />,
    document.querySelector('#root')
)