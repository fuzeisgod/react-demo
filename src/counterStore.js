// createContext 是 react 提供的一个用于跨组件传值的方法
import React, { Component, createContext } from 'react'

// createContext 这个方法的结果是一个对象，里面有两个组件： Provide 和 Consumer
// Provider用于提供状态
// Consumer用于接收状态
const {
    Provider,
    Consumer: CounterConsumer // 结构出来重新赋值给一个 CounterConsumer 的组件
} = createContext()

// 封装一个基本的 Provider，因为直接使用 Provider，不方便管理状态
class CounterProvider extends Component {
    constructor() {
        super()
        // 这里的状态就是共享的，任何 CounterProvider 的后代组件，都可以通过 CounterConsumer 来接收这个值
        this.state = {
            count: 100
        }
    }
    // 这里的方法也会继续通过 Provider 共享下去
    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            // 使用 Provider 这个组件，它必须有一个value值，这个value里可以传递任何的数据。一般还是传递一个对象比较合理。
            <Provider value={{
                count: this.state.count,
                onIncrementCount: this.incrementCount,
                onDecrementCount: this.decrementCount
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    CounterConsumer,
    CounterProvider
}