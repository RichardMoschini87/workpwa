const oggetto = {
    nome: '',
    cognome: ''
}

const oggettiReduce = (state = oggetto, action) => {
    if (action.type == 'OBJ')
        return state = action.payload
    return state
}
export default oggettiReduce