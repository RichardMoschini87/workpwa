
const workOutOut = {
    ordine: 0,
    tipo: '',
    time: '',
    esercizio: ''
}




const saveReducer = (state = [], action) => {
    if (action.type == 'SAVE') {
        return   state.push(action.payload) 
    }

    return state
}

export default saveReducer