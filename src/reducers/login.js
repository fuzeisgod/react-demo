import actionTypes from '../actions/actionTypes'

const initState = {
    id: '',
    displayName: '',
    evatar: '',
    role: '',
    isLogin: false,
    isLoading: false
}

export default (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.START_LOGIN:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload.userInfo,
                isLogin: true,
                isLoading: false
            }
        case actionTypes.LOGIN_FAIL:
            return initState
        default:
            return state
    }
}