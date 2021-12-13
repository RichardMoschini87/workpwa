import React, { useEffect } from "react";
import './Search.css'
import { useSelector, useDispatch } from "react-redux";
import cronoAct from '../reduxActions/CronoAction'


function Search() {
    var interrupt = false
    const obj = useSelector(state => state.objReducer)
    const time = useSelector(state => state.cronoReduce)
    const dispatch = useDispatch()
    const [timeOn, setTimeOn] = React.useState(false)

    React.useEffect(() => {
        let interval = null
        let min = 0
        let sec = 0

        if (timeOn) {
            interval = setInterval(() => {
                // aggiorno state

                dispatch(cronoAct(min, sec))
                // document.getElementById('time').innerHTML = min + ':' + sec
                sec++
                if (sec == 60) {
                    min++
                    sec = 0
                }
            }, 1000)
        }
        else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timeOn])
    // funzione del cronometro che passa lo stato



    return (<div><h2>Componente di ricerca per : {obj.nome + ' ' + obj.cognome} </h2>
        <h2 id="time">
            {time.minuti + ':' + time.secondi}
        </h2>
        <button onClick={() => {
            setTimeOn(true)
        }} >START</button>
        <button onClick={() => { setTimeOn(false) }}>STOP</button>
    </div >
    )
}

export default Search