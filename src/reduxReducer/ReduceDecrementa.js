const decrementaReducer = (state = 0, action) => {
    if (action.type == 'DECREMENTA')
        return state - action.value
    return state
}

export default decrementaReducer