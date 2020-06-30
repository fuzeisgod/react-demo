import React from 'react'
import { render } from 'react-dom'

// Provider 是 react-redux 提供的一个组件
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)