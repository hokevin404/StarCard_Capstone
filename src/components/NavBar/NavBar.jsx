// import NavBar css
import './navbar.css';

// import modules
import { useAuth } from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from "react";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function NavBar() {
    // Initialize to navigate to other pages
    const nav = useNavigate();
    // Destructure logout, isAuth, and toggleAuth from useAuth
    const { logout, isAuth, toggleAuth, cookies } = useAuth();
    // Decode token from cookies
    const decoded = jwtDecode(cookies.token)
    // Store userid from token to userid variable
    const userid = decoded.user.id;

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

    // Function to delete user from database
    async function handleClickToDelete() {
        const confirmed = window.confirm(`Are you sure you want to 
            delete your account? This action cannot be undone.`);

        if(confirmed)
            try {
                await axios({
                    method: "DELETE",
                    url: `http://127.0.0.1:3000/api/users/${userid}`,
                    headers: { 'x-auth-token': cookies.token }
                })
                logout();
                toggleAuth();
                nav('/');
            } catch (error) {
                console.error(`Error deleting user: `, error)
            }
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
                    <li className='logout'><button onClick={handleClickToDelete}>Profile</button></li>
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