import actionType from './actionType'
import { getPost } from '../services'

// action有两种写法

// 第一种写成一个对象,这是标准的action,但是,问题是不方便传递动态参数
// export const increment = {
//     type: actionType.CART_AMOUNT_INCREMENT,
//     payload: {
//         id: 123
//     }
// }

// 在工作中,常用的一种方式是使用 actionCreator，它是一个方法，返回一个对象，这个对象才是真正的 action
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

// 异步 action，使用 redux-thunk 之后，就可以在 actionCreator 里 return 一个方法，这个方法的参数是 disptch
// export const decrementAsync = (id) => {
//     return (dispatch) => {
//         setTimeout((id) => {
//             dispatch(decrement(id))
//         }, 2000)
//     }
// }

export const decrementAsync = id => dispatch => {
    setTimeout(() => {
        dispatch(decrement(id))
    }, 2000)
}

const startFetchData = () => {
    return {
        type: actionType.START_FETCH_DATA
    }
}

const fetchDataSuccess = (payload) => {
    return {
        type: actionType.FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFail = () => {
    return {
        type: actionType.FETCH_DATA_FAIL
    }
}


export const fetchData = () => dispatch => {
    dispatch(startFetchData())
    getPost().then(res => {
        console.log(res)
        res = {
            status: 200,
            data: [{
                id: 1,
                title: 'test_Apple',
                price: 8888,
                amount: 10
            }, {
                id: 2,
                title: 'test_Orange',
                price: 5555,
                amount: 8
            }]
        }
        if (res.status === 200) {
            dispatch(fetchDataSuccess({
                list: res.data
            }))
        } else {
            dispatch(fetchDataFail())
        }
    }).catch(err => {
        console.log(err)
        dispatch(fetchDataFail())
    })
}


