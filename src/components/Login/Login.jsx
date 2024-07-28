import React from "react"

function Login({ setNewUser }) {
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
                />
                <label htmlFor="password">Password: </label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="password"
                    minLength="8"
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