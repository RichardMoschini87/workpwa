import React, { useEffect } from "react";
import './Search.css'
import { useSelector, useDispatch } from "react-redux";
import cronoAct from '../reduxActions/CronoAction'


function Search() {
    var interrupt = false
    const obj = useSelector(state => state.objReducer)
    const time = useSelector(state => state.cronoReduce)
    const dispatch = useDispatch()
    const [interv, setInterv] = React.useState()

    var min = time.minuti
    var sec = time.secondi

    // funzione del cronometro che passa lo stato
    const run = () => {
        dispatch(cronoAct(min, sec))
        sec++
        if (sec == 60) {
            min++
            sec = 0
        }
    }

    const start = () => {
        run()
        setInterv(setInterval(run, 1000))
    }

    const stop = () => {
        clearInterval(interv)
    }



    return (<div><h2>Componente di ricerca per : {obj.nome + ' ' + obj.cognome} </h2>
        <h2>
            {time.minuti + ':' + time.secondi}
        </h2>
        <button onClick={start} >START</button>
        <button onClick={stop}>STOP</button>
    </div>
    )
}

export default Search