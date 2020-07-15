// 这个文件只适用于解释 react-loadable 原理用，当然可以无缝切换。

import React, { Component } from 'react'

const Loadable = ({
    loader,
    loading: Loading
}) => {
    return class loadableComponent extends Component {
        state = {
            LoadedComponent: null
        }
        // loading 组件加载完毕后执行 加载所需路由组件的方法。
        componentDidMount() {
            // import('./DashBoard')
            loader()
                .then(res => {
                    this.setState({
                        LoadedComponent: res.default
                    })
                })
        }
        render() {
            const { LoadedComponent } = this.state
            return (
                LoadedComponent
                    ?
                    <LoadedComponent />
                    :
                    <Loading />
            )
        }
    }
}

export default Loadable