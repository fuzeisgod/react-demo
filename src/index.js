import React from 'react'
import ReactDom from 'react-dom'

// const createApp = (props) => {
//     return (
//         // 在jsx语法中插入js的代码，要在花括号内
//         <h1>hello {props.title}</h1>
//     )
// }

// const app = createApp({
//     title: 'React 16.13'
// })


// 创建组件的第一种方式：使用箭头函数，但是函数名称首字母要大写
const App = (props) => {
    return (
        <h1 title={props.title}>hello {props.title}</h1>
    )
}

ReactDom.render(
    <App title="react" />,
    document.querySelector('#root')
)
