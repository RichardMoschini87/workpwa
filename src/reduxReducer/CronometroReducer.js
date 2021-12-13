const time = {
    minuti: 0,
    secondi: 0
}

const cronoReduce = (state = time , action) => {
    if (action.type == 'CRONO')
        state = action.payload
    return state
}

export default cronoReduce