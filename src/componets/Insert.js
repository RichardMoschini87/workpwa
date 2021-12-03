import React from "react";
import './Insert.css'
import Search from "./Search";
import incrementa from '../reduxActions/ActionIncrementa'
import decrementa from "../reduxActions/ActionDecrementa";
import {useSelector,useDispatch} from 'react-redux'

function Insert() {
    var cronometro = 0;
    var min = 0, sec = 0
    //############## PROVA REDUX #############################
    const increment = useSelector(state => state.aumentaReducer)
    const disptch = useDispatch()
    const decrement = useSelector(state => state.decrementaReducer)

    //############## FUNZIONI CRONOMETRO #############################
    const start = () => {
        cronometro = setInterval(() => {
            sec++;
            if (sec === 60) {
                min++;
                sec = 0;
            }
            document.getElementById('idd').innerHTML = min + ':' + sec
        }, 1000)
    }

    const stop = () => {
        clearInterval(cronometro)
        min = 0;
        sec = 0;
        document.getElementById('idd').innerHTML = min + ':' + sec
    }
//##################################################################à
    return (
        <div>
            <h1 id='idd'></h1>
            <h2> PROVA STATE : { increment} </h2>
            <button onClick={()=>disptch(incrementa())}>INCREMENTA</button>
            <button onClick={()=>disptch(decrementa())}>DECREMENTA</button>

            <button onClick={start} >Start</button>
            <button onClick={stop}>STOP</button>
            <Search></Search>
        </div>
    )
}

export default Insert;


