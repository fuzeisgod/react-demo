import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    static propTypes = {
        btnText: PropTypes.string
    }
    // 通过类的静态属性 defaultProps 来设置参数的默认值，此值优先级次于传入的props
    static defaultProps = {
        btnText: '添加Todo'
    }
    render() {
        return (
            <div>
                <input type="text" /><button>{this.props.btnText}</button>
            </div>
        )
    }
}
