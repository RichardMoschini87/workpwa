import React, { useEffect } from "react";
import './Search.css'
import { useSelector, useDispatch } from "react-redux";
import cronoAct from '../reduxActions/CronoAction'


function Search() {
    var interrupt = false
    const obj = useSelector(state => state.objReducer)
    const time = useSelector(state => state.cronoReduce)
    const dispatch = useDispatch()
    var cronometro = 0
    var min = 0, sec = 0


    // funzione del cronometro che passa lo stato



    return (<div><h2>Componente di ricerca per : {obj.nome + ' ' + obj.cognome} </h2>
        <h2>
            {time}
        </h2>
        <button onClick={() => {
            cronometro = setInterval(() => {
                // aggiorno state
                dispatch(cronoAct(min, sec))
                sec++
                if (sec == 60) {
                    min++
                    sec = 0
                }
            }, 1000)

        }}>START</button>
        <button onClick={() =>
            clearInterval(cronometro)
        }>STOP</button>
    </div>
    )
}

export default Search