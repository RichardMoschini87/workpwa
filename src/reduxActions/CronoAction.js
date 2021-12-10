
const cronoAct = (min, sec) => {
    return {
        type: 'CRONO',
        value: min + ':' + sec,
    }
}
export default cronoAct