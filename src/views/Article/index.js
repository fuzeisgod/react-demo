import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Article extends Component {
    render() {
        return (
            <div>
                <Link to="/article/1?from=article">文章一</Link>
                <br />
                <Link to={
                    {
                        pathname: '/article/2',
                        state: {
                            from: 'article'
                        }
                    }
                }>文章二</Link>
            </div>
        )
    }
}

// 路由传参的方式：
// 1.query
// 2.动态路由 /path/:param => params
// 3.使用 state 隐式传参

// 埋点

// 发送数据的方式
// 1.ajax
// 2.img：通过请求一张图片的地址，来带参数进行发送（兼容性好）
// const img = new Image()
// img.src='http://www.baidu.com/button-01.gif?x=1&y=2'    
// 3.sendBeacon (兼容性差)