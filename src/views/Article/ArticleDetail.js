import React, { Component } from 'react'

export default class ArticleDetail extends Component {
    goHome = () => {
        // this.props.history.push('/home')
        this.props.history.push({
            pathname: '/home',
            state: {
                x: this.props.match.params.id
            }
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                文章详情 { this.props.match.params.id}
                <button onClick={this.goHome}>返回首页</button>
            </div>
        )
    }
}
