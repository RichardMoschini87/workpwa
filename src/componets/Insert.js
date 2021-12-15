import React,{useState} from "react";
import './Insert.css'
import { useSelector, useDispatch } from 'react-redux'
import Tipo from "./childComponent/Tipo";
import Time from "./childComponent/Time";
import Esercizio from "./childComponent/Esercizio";

function Insert() {
    const primo = 1
    const secondo = 2
    const terzo = 3

    return (
        <div className="grid-container">

            <Tipo index={primo}></Tipo>
            <Time index={primo}></Time>
            <Esercizio index={primo}></Esercizio>

            <Tipo index={secondo}></Tipo>
            <Time index={secondo}></Time>
            <Esercizio index={secondo}></Esercizio>

            <Tipo index={terzo}></Tipo>
            <Time index={terzo}></Time>
            <Esercizio index={terzo}></Esercizio>
        </div>
    )
}

export default Insert;


