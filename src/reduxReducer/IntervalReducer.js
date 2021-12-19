

const intervalReduce = (state = 0, action) => {
    if (action.type == 'INTERVAL')
        return state = action.payload
    return state
}
export default intervalReduce