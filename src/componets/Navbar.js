import React from "react";
import './Navbar.css'
import { ItemNav } from '../navbarUtil/itemNav'

function Navbar() {
    return (
        <nav id='nav' class="navbar">
            {ItemNav.map((item, index) => {
                return (
                    <a class={item.cname} href={item.url}>{item.title}</a>
                )
            })}
        </nav>);
}

export default Navbar;