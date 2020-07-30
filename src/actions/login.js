import actionTypes from './actionTypes'

import { loginRequest } from '../requests'

const startLogin = () => {
    return {
        type: actionTypes.START_LOGIN
    }
}

const loginSuccess = (userInfo) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            userInfo
        }
    }
}

const loginFail = () => {
    return {
        type: actionTypes.LOGIN_FAIL
    }
}


export const login = (userInfo) => {
    return dispatch => {
        dispatch(startLogin())
        loginRequest(userInfo)
            .then(res => {
                if (res.data.code === 200) {
                    dispatch(loginSuccess(res.data.data))
                } else {
                    dispatch(loginFail())
                }
            })
    }
}