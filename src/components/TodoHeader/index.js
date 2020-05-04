import React from 'react'
import PropTypes from 'prop-types'

export default function TodoHeader(props) {
    console.log(props)
    return (
        <>
            <h1>
                {props.children}
            </h1>
            <h3>
                {props.desc}
            </h3>
            <p>{props.x + props.y}</p>
        </>
    )
}


// npm i prop-types -S 第三方检查数据格式的包
TodoHeader.propTypes = {
    desc: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    children: PropTypes.object.isRequired
}

// 设置默认值
TodoHeader.defaultProps = {
    desc: '默认说明'
}