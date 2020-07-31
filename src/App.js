import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'

import { Frame } from './components'

import { connect } from 'react-redux'

const menus = adminRoutes.filter(route => {
    return route.isNav === true
})

const mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin,
        role: state.login.role
    }
}

@connect(mapStateToProps)
class App extends Component {
    render() {
        return (
            this.props.isLogin
            ?
            <Frame menus={menus}>
                <Switch>
                    {
                        adminRoutes.map(route => {
                            return (
                                <Route
                                    path={route.pathName}
                                    key={route.pathName}
                                    exact={route.exact}
                                    render={(routerProps) => {
                                        console.log()
                                        const hasPermission = route.roles.includes(this.props.role)
                                        return hasPermission ? <route.component {...routerProps} /> : <Redirect to="/admin/noauth"/>
                                    }}
                                />
                            )
                        })
                    }
                    <Redirect to={adminRoutes[0].pathName} from="/admin" exact />
                    <Redirect to="/404" />
                </Switch>
            </Frame>
            :
            <Redirect to="/login"/>
        )
    }
}

export default App