import React, { useState } from "react";
import './SyncType.css'
// simulazione dati che verranno successivamente caricati 
import { rip, time, types, eserxices } from '../../utils/ArrayTest'

function SyncTYpe() {
    const [valore, setValore] = useState([{}])
    const [times, setTimes] = useState("")
    const [ex, setEx] = useState("")

//prima combo box change
    const handleChange = (event) => {
        console.log(event.target.value)
        if (event.target.value == 'ripetizioni') {
            setValore(rip)

        } else {
            setValore(time)
        }
    }

    //seconda combo box change
    const handleChangeTime = (event) => {
        setTimes(event.target.value)
    }

    //terza combo box change
    const handleChangeEx = (event) => {
        setEx(event.target.value)
    }

    return (
        <div className="container-sync">
            <div className="tipo">
                <label>Tipo esercizio</label>
                <select onChange={handleChange}>
                    {types.map((item, index) => {
                        return (
                            <option value={item.descrizione}>{item.descrizione}</option>
                        )
                    })}

                </select>
            </div>
            <div className="time">
                <label>tempo / numero</label>
                <select onChange={handleChangeTime}>
                    <option value="0"></option>
                    {
                        valore.map((item, index) => {
                            return (
                                <option value={item.descrizione}>{item.descrizione}</option>
                            )
                        })
                    }

                </select>
            </div>
            <div className="esercizio">
                <label> Esercizio</label>
                <select id="sel" onChange={handleChangeEx}>
                    <option value="0"></option>
                    {eserxices.map((item, index) => {
                        return (
                            <option value={item.descrizione}>{item.descrizione}</option>
                        )
                    })}

                </select>
            </div>
        </div>
    )
}

export default SyncTYpe