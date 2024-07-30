// import NavBar css
import './navbar.css';

// import modules
import { useAuth } from '../../context/auth/authContext';
import { Link } from 'react-router-dom';
import React from "react";

function NavBar() {
    const { logout } = useAuth();

    function handleClick() {
        logout();
    }

    return (
        <ul className="navbar">
            <li className="logo">
                <Link to={'/'}><
                    img src="src/assets/horizontal_logo-removebg.png" alt="Logo" />
                </Link>
            </li>
            <li className="spacer"></li>
            <li className='login'><button onClick={handleClick}>Log Out</button></li>
            <li className='login'><Link to={'/login'}>Log In</Link></li>
        </ul>
    )
}

export default NavBar