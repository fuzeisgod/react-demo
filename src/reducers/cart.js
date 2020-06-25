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
        default:
            return state
    }
}