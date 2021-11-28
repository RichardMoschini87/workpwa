import React from "react";
import './Navbar.css'

function Navbar() {
    return (<nav id='nav' class="navbar">
        <a class="active">Home</a>
        <a class="active">Insert</a>
        <a class="active" >Search</a>
        <a class="active">Workout</a>
    </nav>);
}

export default Navbar;