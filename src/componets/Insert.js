import React from "react";
import './Insert.css'
import incrementa from '../reduxActions/ActionIncrementa'
import decrementa from "../reduxActions/ActionDecrementa";
import objAct from "../reduxActions/ObjAction";
import { useSelector, useDispatch } from 'react-redux'

function Insert() {
    var cronometro = 0;
    var min = 0, sec = 0
    //############## PROVA REDUX #############################
    const increment = useSelector(state => state.aumentaReducer)
    const disptch = useDispatch()
    const decrement = useSelector(state => state.decrementaReducer)
    const obj = useSelector(state=> state.objReducer)

    const oggetto = {
        nome: 'Richard',
        cognome: 'Moschini'
    }
  
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
            <h2> PROVA STATE : {increment + decrement} </h2>
            <h2>STATE OBJ {obj.nome +' '+ obj.cognome}</h2>
            <button onClick={() => disptch(incrementa())}>INCREMENTA</button>
            <button onClick={() => disptch(decrementa())}>DECREMENTA</button>

            <button onClick={start} >Start</button>
            <button onClick={stop}>STOP</button>
            <button onClick={()=> disptch(objAct(oggetto))}>CARICA</button>
        </div>
    )
}

export default Insert;


