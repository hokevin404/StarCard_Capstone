import './login.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";

function Login({ setNewUser }) {
    const nav = useNavigate();
    const { login } = useAuth();
    const [ formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // Function to dictate detected changes
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        await login(formData);
        nav('/dashboard');
    }

    // Function to dictate click action
    function handleClick() {
        setNewUser(true);
    }

    return (
        <div className="loginContainer">
            <h3>Log In</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="username">Username </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    onChange={handleChange}
                />
                <label htmlFor="password">Password </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    minLength="8"
                    onChange={handleChange}
                />
                <button className='loginBtn' type="submit">Log In</button>
            </form>

            <p>
                Don't have an account?
                <button className='signUpBtn' onClick={handleClick}>Sign Up</button>
            </p>
        </div>
    )
}

export default Login