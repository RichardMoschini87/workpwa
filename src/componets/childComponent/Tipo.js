import React, { useState } from "react";
import './Tipo.css'
import { useDispatch } from "react-redux";
import ripAct from '../../reduxActions/ActionRip'
import timeAct from '../../reduxActions/ActionTime'
import { types } from '../../utils/ArrayTest'

function Tipo() {
    const dispatch = useDispatch()


    const handleChange = (event) => {
        console.log(event.target.value)
        if (event.target.value == 'ripetizioni') {
            // redux ripetizioni a true
            dispatch(ripAct(true))
            dispatch(timeAct(false))

        } else {
            // redux a tempo a true
            dispatch(timeAct(true))
            dispatch(ripAct(false))
        }


    }
    return (
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
    )
}

export default Tipo