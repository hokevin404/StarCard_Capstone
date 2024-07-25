// import NavBar css
import './navbar.css';

import React from "react";

function NavBar() {
    return (
        <ul className="navbar">
            <li className="logo"><img src="src/assets/horizontal_logo-removebg.png" alt="Logo" /></li>
            <li className="spacer"></li>
            <li className="signup"><a href="#">Sign Up</a></li>
            <li><a href="#">Log In</a></li>
        </ul>
    )
}

export default NavBar