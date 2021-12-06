import React from "react";
import './Navbar.css'
import { ItemNav } from '../navbarUtil/itemNav'
import{Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav id='nav' className="navbar">
            {ItemNav.map((item, index) => {
                return (
                    <Link to={item.url}>
                    <a key={index} className={item.cname}>{item.title}</a>
                    </Link>
                )
            })}
           
        </nav>);
}

export default Navbar;