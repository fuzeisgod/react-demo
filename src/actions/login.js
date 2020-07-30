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
    window.localStorage.removeItem('authToken')
    window.localStorage.removeItem('userInfo')
    window.sessionStorage.removeItem('authToken')
    window.sessionStorage.removeItem('userInfo')
    return {
        type: actionTypes.LOGIN_FAIL
    }
}

export const logout = () => {
    return dispatch => {
        // 实际的项目中，在这里要告诉服务端退出
        dispatch(loginFail())
    }
}


export const login = (loginInfo) => {
    return dispatch => {
        dispatch(startLogin())
        loginRequest(loginInfo)
            .then(res => {
                if (res.data.code === 200) {
                    const {
                        authToken,
                        ...userInfo
                    } = res.data.data
                    if (loginInfo.remember === true) {
                        window.localStorage.setItem('authToken', authToken)
                        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
                    } else {
                        // sessionStorage 数据储存时间仅限于页面存在时
                        window.sessionStorage.setItem('authToken', authToken)
                        window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
                    }

                    dispatch(loginSuccess(res.data.data))
                } else {

                    dispatch(loginFail())
                }
            })
    }
}