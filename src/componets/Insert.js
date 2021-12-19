import React, { useState } from "react";
import './Insert.css'
import SyncTYpe from "./childComponent/SyncType";

function Insert() {
    const primo = 1
    const secondo = 2
    const terzo = 3
    const workOutOut = {
        ordine: 0,
        tipo: '',
        time: '',
        esercizio: ''
    }

    const saveWorkOut = () => {
        // chiamata rest per salvare il workOut
    }

    return (
        <div className="grid-container">
            <SyncTYpe index={primo}></SyncTYpe>

            <SyncTYpe index={secondo}></SyncTYpe>

            <SyncTYpe index={terzo}></SyncTYpe>
            <div className="btn"> <button id="btn" onClick={saveWorkOut}><h3 className="save">SALVA WORKOUT</h3></button></div>
        </div>

    )
}

export default Insert;


