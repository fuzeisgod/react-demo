import React, { Component } from 'react'
import { render } from 'react-dom'
import classNames from 'classnames'
import styled from 'styled-components'

import './index.css'

const Title = styled.h1`
    color: red;
`

class App extends Component {
    render() {
        // 这里不是在jsx语法内，不需要外面再包一层花括号
        const style = { color: 'red' }
        return (
            <div>
                <Title>元素中的样式</Title>
                <ul>
                    {/* 第一层花括号表示要在jsx中写javascript语句，第二层花括号表示元素的样式对象 */}
                    <li style={style}>使用style内联创建</li>
                    <li className="has-text-red">使用class的方式，但是在react中class要写成className</li>
                    <li className={classNames('a', { 'b': true, 'c': false })}>要动态添加不同的className，就可以使用第三方的包叫classNames, 比如这个li标签上就只有a,b两种className，没有c</li>
                    <li>styled-components的使用</li>
                </ul>
            </div >
        )
    }
}


// render 是 reactDom 提供的一个方法，这个方法通常只会调用一次
render(
    <App title='这是类组件' />,
    document.querySelector('#root')
)