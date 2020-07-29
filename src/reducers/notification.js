import actionTypes from '../actions/actionTypes'

const initState = {
    isLoading: false,
    list: [{
        id: 1,
        title: 'Ant Design Title 1',
        desc: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
        hasRead: false
    }, {
        id: 2,
        title: 'Ant Design Title 2',
        desc: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
        hasRead: false
    }]
}

export default (state = initState, action) => {
    const { list } = state
    let newList = []
    switch (action.type) {
        case actionTypes.START_MARK_AS_READ:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.FINISH_MARK_AS_READ:
            return {
                ...state,
                isLoading: false
            }
        case actionTypes.MARK_NOTIFICATIONS_AS_READ_BY_ID:
            newList = list.map(item => {
                if (item.id === action.payload.id) {
                    item.hasRead = true
                }
                return item
            })
            return {
                ...state,
                list: newList
            }
        case actionTypes.MARK_ALL_NOTIFICATIONS_AS_READ:
            newList = list.map(item => {
                item.hasRead = true
                return item
            })
            return {
                ...state,
                list: newList
            }
        default:
            return state
    }
}