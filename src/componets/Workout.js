import React, { useState } from "react";
import Cronometro from "./Cronometro";
import './Workout.css'

function Workout() {
    const [crono, setCrono] = useState(false)

    const start = () => {
        setCrono(true)
    }
    const stop = () => {
        setCrono(false)
    }

    return (
        <div>
            <Cronometro cronometroStart={crono}></Cronometro>
            <button onClick={start}>START</button>
            <button onClick={stop}>STOP</button>
        </div>
    )
}
export default Workout