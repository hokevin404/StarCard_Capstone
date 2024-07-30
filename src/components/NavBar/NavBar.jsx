// import NavBar css
import './navbar.css';

// import modules
import { useAuth } from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from "react";

function NavBar() {
    // Initialize to navigate to other pages
    const nav = useNavigate();
    // Destructure logout, isAuth, and toggleAuth from useAuth
    const { logout, isAuth, toggleAuth } = useAuth(false);

    // Navigate to user profile on click
    function handleClickToProfile() {
        nav('/profile');
    }

    // Navigate to homepage after logging out
    function handleClick() {
        toggleAuth();
        logout();
        nav('/');
    }

    return (
        <ul className="navbar">
            <li className="logo">
                <Link to={'/'}><
                    img src="src/assets/horizontal_logo-removebg.png" alt="Logo" />
                </Link>
            </li>
            <li className="spacer"></li>
            {isAuth ? (
                <>
                    <li className='logout'><button onClick={handleClickToProfile}>Profile</button></li>
                    <li className='logout'><button onClick={handleClick}>Log Out</button></li>
                </>

            ) : (
                <li className='login'><Link to={'/login'}>Log In</Link></li>
            )}
        </ul>
    )
}

export default NavBar