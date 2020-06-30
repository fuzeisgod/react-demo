// createStore 是 redux 提供的一个用于创建 store 的方法, 这个原理在分支 lesson-11 中.
import { createStore } from 'redux'

// 引入合并后的 reducer
import rootReducer from './reducers'

// createStore 的第一个参数必须是一个 reducer,如果是多个,请在reducers目录下先使用 combineReducers 合并之后再导出
export default createStore(rootReducer)