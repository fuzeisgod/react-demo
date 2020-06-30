import actionType from './actionType'

// action有两种写法

// 第一种写成一个对象,这是标准的action,但是,问题是不方便传递动态参数
// export const increment = {
//     type: actionType.CART_AMOUNT_INCREMENT,
//     payload: {
//         id: 123
//     }
// }

// 在工作中,
export const increment = (id) => {
    return {
        type: actionType.CART_AMOUNT_INCREMENT,
        payload: {
            id
        }
    }
}

export const decrement = (id) => {
    return {
        type: actionType.CART_AMOUNT_DECREMENT,
        payload: {
            id
        }
    }
}