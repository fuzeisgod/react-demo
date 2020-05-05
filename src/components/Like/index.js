import React, { Component } from 'react'

export default class Like extends Component {
    constructor() {
        super()
        this.state = {
            isLiked: false
        }
    }
    handleLikeClick = () => {
        // react 中修改 state 中的数据要用 setState 方法。

        // setState接受两种类型参数，第一种是一个对象：
        // this.setState({
        //     isLiked: !this.state.isLiked
        // })

        // 第二种是一个方法，去 return 一个对象，该方法接受一个参数，表示上一状态的state对象
        // setState 是一个异步方法
        this.setState((prevState) => {
            console.log(prevState)
            return {
                isLiked: !prevState.isLiked
            }
        }, () => {
            // 由于 setState是异步的，如果想要获取到最新的 state，应该在这个回调里获取
            console.log(this.state.isLiked)
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleLikeClick}>
                    {
                        this.state.isLiked ? '取消 💗' : '喜欢 🖤'
                    }
                </span>
            </div>
        )
    }
}
