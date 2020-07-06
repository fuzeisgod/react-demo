// 为了避免actionType重复,所以一般会把actionType放在一个文件里统一进行管理,也可以避免写错actionType
import actionType from '../actions/actionType'

// 对于这个购物车,这里有一个初始化的状态
const initState = {
    list: [{
        id: 1,
        title: 'Apple',
        price: 8888,
        amount: 10
    }, {
        id: 2,
        title: 'Orange',
        price: 5555,
        amount: 8
    }],
    errMsg: '',
    isLoading: false
}

// 创建购物车的 reducer,reducer的固定写法是两个参数,第一个就是state并有一个初始化,第二个是action
export default (state = initState, action) => {
    // 根据不同的action.type,做不同的处理,每次返回一个新的state,返回的类型要一样.
    switch (action.type) {
        case actionType.CART_AMOUNT_INCREMENT:
            // map 会生成一个新数组
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.amount += 1
                }
                return item
            })
        case actionType.CART_AMOUNT_DECREMENT:
            // map 会生成一个新数组
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.amount -= 1
                }
                return item
            })
        case actionType.START_FETCH_DATA:
            return {
                ...state,
                isLoading: true
            }
        case actionType.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.payload.list
            }
        case actionType.FETCH_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                errMsg: '有些不正常...'
            }
        // 一定要有default, 当 actionType不对的时候,就不做任何处理,返回上一次的state
        default:
            return state
    }
}