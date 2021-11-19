import React from "react";
import './Navbar.css'

function Navbar() {
    return (<nav id='nav' class="navbar">
        <a class="active">Home</a>
        <a class="active">News</a>
        <a class="active" >Contact</a>
        <a class="active">About</a>
    </nav>);
}

export default Navbar;