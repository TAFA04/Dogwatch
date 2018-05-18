export default (state = 10, { type }) => {
    switch (type) {
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}