import actionTypes from '../actions/actionTypes'

const isLogin = Boolean(window.localStorage.getItem('authToken')) || Boolean(window.sessionStorage.getItem('authToken'))

const userInfo = JSON.parse(window.localStorage.getItem('userInfo')) || JSON.parse(window.sessionStorage.getItem('userInfo'))

const initState = {
    ...userInfo,
    isLogin: isLogin,
    isLoading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.START_LOGIN:
            console.log(state)
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                ...action.payload.userInfo,
                isLogin: true,
                isLoading: false
            }
        case actionTypes.LOGIN_FAIL:
            return {
                id: '',
                displayName: '',
                avatar: '',
                isLogin: '',
                isLoading: ''
            }
        default:
            return state
    }
}