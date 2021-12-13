
const cronoAct = (min, sec) => {
    var time = {
        minuti: min,
        secondi: sec
    }
    return {
        type: 'CRONO',
        payload: time
    }
}
export default cronoAct