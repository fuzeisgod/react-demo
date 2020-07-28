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
        hasRead: true
    }]
}

export default (state = initState, action) => {
    switch(action.type){
         default:
             return state
    }
}