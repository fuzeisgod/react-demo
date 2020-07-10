import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Article extends Component {
    render() {
        return (
            <div>
                <Link to="/article/1">文章一</Link>
                <br/>
                <Link to="/article/2">文章二</Link>
            </div>
        )
    }
}
