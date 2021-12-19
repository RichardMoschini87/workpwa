import React, { useState } from "react";
import './Insert.css'
import SyncTYpe from "./childComponent/SyncType";

function Insert() {
    const primo = 1
    const secondo = 2
    const terzo = 3

    return (
        <div className="grid-container">
            <SyncTYpe index={primo}></SyncTYpe>

            <SyncTYpe index={secondo}></SyncTYpe>

            <SyncTYpe index={terzo}></SyncTYpe>

        </div>
    )
}

export default Insert;


