import React from "react";
import './Insert.css'

function Insert() {
    var cronometro = 0;
    var min = 0, sec = 0

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

    return (
        <div>
            <h1 id='idd'></h1>
            <button onClick={start} >Start</button>
            <button onClick={stop}>STOP</button>
        </div>
    )
}

export default Insert;


