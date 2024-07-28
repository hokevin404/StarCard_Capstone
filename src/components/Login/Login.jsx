import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";

function Login({ setNewUser }) {
    const nav = useNavigate();
    const { Login } = useAuth();
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

    // Function to dictate click action
    function handleClick() {
        setNewUser(true);
    }

    return (
        <div className="loginContainer">
            <h3>Log In</h3>
            <form autoComplete="off">
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    onChange={handleChange}
                />
                <label htmlFor="password">Password: </label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="password"
                    minLength="8"
                    onChange={handleChange}
                />
                <button type="submit" onClick={handleClick}>Log In</button>
            </form>

            <p>
                Don't have an account?
                <button onClick={handleClick}>Sign Up</button>
            </p>
        </div>
    )
}

export default Login