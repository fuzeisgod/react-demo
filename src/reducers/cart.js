import actionType from '../actions/actionType'

const initState = [{
    id: 1,
    title: 'Apple',
    price: 8888,
    amount: 10
}, {
    id: 2,
    title: 'Orange',
    price: 5555,
    amount: 8
}]

export default (state = initState, action) => {
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
        default:
            return state
    }
}