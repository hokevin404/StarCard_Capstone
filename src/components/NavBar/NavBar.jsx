// import NavBar css
import './navbar.css';

// import modules
import { Link } from 'react-router-dom';

import React from "react";

function NavBar() {
    return (
        <ul className="navbar">
            <li className="logo">
                <Link to={'/'}><
                    img src="src/assets/horizontal_logo-removebg.png" alt="Logo" />
                </Link>
            </li>
            <li className="spacer"></li>
            <li className="signup"><Link to={'/auth'}>Sign Up</Link></li>
            <li><Link to={'/auth'}>Log In</Link></li>
        </ul>
    )
}

export default NavBar