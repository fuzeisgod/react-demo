import React, { Component } from 'react'

const testHOC = (Com) => {
    return class HOCComponent extends Component {
        render() {
            return <><Com /><div>这是高阶组件里的信息</div></>
        }
    }
}

export default @testHOC class App extends Component {
    render() {
        return (
            <div>
                App
            </div>
        )
    }
}

