import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'

import { Frame } from './components'

const menus = adminRoutes.filter(route => {
    return route.isNav === true
})

export default class App extends Component {
    render() {
        return (
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
                                        return <route.component {...routerProps} />
                                    }}
                                />
                            )
                        })
                    }
                    <Redirect to={adminRoutes[0].pathName} from="/admin" exact />
                    <Redirect to="/404" />
                </Switch>
            </Frame>
        )
    }
}

