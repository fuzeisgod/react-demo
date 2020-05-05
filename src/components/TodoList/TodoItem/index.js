import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                {this.props.title} {this.props.isCompleted ? '完成' : '未完成'}
            </div>
        )
    }
}
