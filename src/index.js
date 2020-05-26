// React Hooks 是 react 16.8 新增的特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

// 两个常见的 api， 就是 useState 和 useEffect。需要先引入
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    // useState() 中传初始值，useState() 返回一个数组，数组第一个元素是赋值的变量，第二个元素是修改变量值的方法。
    const [count, setCount] = useState(0)
    // useEffect的参数是一个回调，首次渲染以及每次更新时触发回调
    useEffect(() => {
        console.log('更新了')
        document.title = `当前的数量为${count}`
    })
    return (
        <div>
            <p>当前的数量为{count}</p>
            {/* 修改变量值的方法只要传入新的值即可改变对应的变量 */}
            <button onClick={() => { setCount(count - 1) }}>-</button>
            <span>{count}</span>
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )
}

render(
    <Counter />,
    document.querySelector('#root')
);

