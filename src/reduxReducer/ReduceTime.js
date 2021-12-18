const timeReducer = (state = false, action) => {
    if (action.type == 'TIME')
        return state = action.value
    return state
}

export default timeReducer