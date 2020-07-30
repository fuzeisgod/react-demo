import { combineReducers } from 'redux'

import notification from './notification'
import login from './login'

export default combineReducers({
    notification,
    login
})