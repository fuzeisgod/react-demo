import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import { adminRouter } from './routes'

export default class App extends Component {
    render() {
        return (
            <div>
                <div>这里是公共的部分</div>
                <Switch>
                    {
                        adminRouter.map(route => {
                            return <Route path={route.pathName} component={route.component} key={route.pathName} exact={route.exact}/>
                        })
                    }
                </Switch>
            </div>
        )
    }
}

