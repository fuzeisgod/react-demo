import actionTypes from './actionTypes'

const startMarkAsRead = () => {
    return {
        type: actionTypes.START_MARK_AS_READ
    }
}

const finishMarkAsRead = () => {
    return {
        type: actionTypes.FINISH_MARK_AS_READ
    }
}

// 异步 dispatch 一个 action，然后只要在 reducer 中处理这个 action 即可
export const markNotificationsAsReadById = (id) => {
    // 异步动作 return 一个 dispatch
    return dispatch => {
        dispatch(startMarkAsRead())
        // 这里是模拟的一个服务端请求
        setTimeout(() => {
            dispatch({
                type: actionTypes.MARK_NOTIFICATIONS_AS_READ_BY_ID,
                payload: {
                    id
                }
            })
            dispatch(finishMarkAsRead())
        }, 500)
    }
}

export const markAllNotificationsAsRead = () => {
    return dispatch => {
        dispatch(startMarkAsRead())
        setTimeout(() => {
            dispatch({
                type: actionTypes.MARK_ALL_NOTIFICATIONS_AS_READ,
            })
            dispatch(finishMarkAsRead())
        }, 500)
    }
}