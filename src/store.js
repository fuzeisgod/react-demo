// createStore 是 redux 提供的一个用于创建 store 的方法, 这个原理在分支 lesson-11 中.
import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

// 引入合并后的 reducer
import rootReducer from './reducers'

// createStore 的第一个参数必须是一个 reducer,如果是多个,请在reducers目录下先使用 combineReducers 合并之后再导出
// 使用 redux-thunk 须在 createStore 时传入第二个参数，applyMiddleware 是一个来自 redux 的添加中间件的方法，传入参数就是 redux-thunk 中间件。
export default createStore(
    rootReducer,
    applyMiddleware(thunk)
)