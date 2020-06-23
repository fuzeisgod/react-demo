import { createStore } from 'redux'

import rootReducer from './reducers'
console.log(rootReducer)
export default createStore(rootReducer)