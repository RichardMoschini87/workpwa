import React, { useEffect } from "react";
import './Cronometro.css'
import { useSelector, useDispatch } from "react-redux";
import cronoAct from '../reduxActions/CronoAction'


function Cronometro(props) {
    const time = useSelector(state => state.cronoReduce)
    const dispatch = useDispatch()
    const [interv, setInterv] = React.useState()
    var cronometroStart = props.cronometroStart

    var min = time.minuti
    var sec = time.secondi

    useEffect(() => {
        if (cronometroStart) {
            start()
        }
        else {
            stop()
        }

    }, [cronometroStart])

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



    return (
        <div className="cronometro-container">
            <h2 className="cronometro">
                {time.minuti + ':' + time.secondi}
            </h2>
        </div>
    )
}

export default Cronometro