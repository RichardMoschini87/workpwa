const aumentaReducer = (state = 0, action) => {
    if (action.type == 'AUMENTA')
        return state + action.value
    return state
}
export default aumentaReducer