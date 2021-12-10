

const cronoReduce = (state = '', action) => {
    if (action.type == 'CRONO')
        state = action.value
    return state
}

export default cronoReduce