import React, { Component } from 'react'
import { CounterConsumer } from '../../counterStore'
// 定义一个Counter组件
export default class Counter extends Component {
    render() {
        return (
            // 使用 CounterConsumer 来接受count，这个方法有一个参数，这个参数就是 Provider 的value
            <CounterConsumer>
                {/* 注意：Consumer 的children必须是一个方法 */}
                {
                    ({ count }) => {
                        return <span>{count}</span>
                    }
                }
            </CounterConsumer>
        )
    }
}