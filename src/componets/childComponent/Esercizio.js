import React, { useEffect, useState } from "react";
import './Esercizio.css'
import { eserxices } from '../../utils/ArrayTest'

function Esercizio(props) {

    const [select, setSelect] = useState("")

    const handleChange = (event) => {
        setSelect(event.target.value)
    }



    return (
        <div className="esercizio">
            <label> Esercizio</label>
            <select id="sel" onChange={handleChange}>
                <option value="0">Seleziona:</option>
                {eserxices.map((item, index) => {
                    return (
                        <option value={item.descrizione}>{item.descrizione}</option>
                    )
                })}

            </select>
            <span> {select} </span>
        </div>
    )
}

export default Esercizio