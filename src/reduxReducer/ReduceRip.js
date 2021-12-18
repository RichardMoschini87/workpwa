const ripReducer = (state = false, action) => {
    if (action.type == 'RIP')
        return state = action.value
    return state
}

export default ripReducer