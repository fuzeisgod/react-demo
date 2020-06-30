// 在实际的项目中,由于只有单一的store,但是状态会有很多分类,所以我们需要划分reducer,但是createStore的参数又只接受一个 reducer,所以,redux 提供了一个用于合并多个 reducer 的方法. 注意: 不要手动合并.
import { combineReducers } from 'redux'

// 引入 cart reducer, 如果有多个,继续引入
import cart from './cart'

// 导出合并后的 reducer
export default combineReducers({
    // 把多个reducer作为combineReducers对象参数传入,在外部就可以通过store.getState().cart 来获取到 cartReducer里面的 state
    cart
})
