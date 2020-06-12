import React from 'react'
import { render } from 'react-dom'

import App from './App'
import store from './store'
console.log(store)

render(
    <App/>,
    document.querySelector('#root')
)