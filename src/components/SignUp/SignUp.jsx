import React from "react";

function SignUp({setNewUser}) {
  function handleClick() {
    setNewUser(false);
  }

  return (
    <div className="signupContainer">
      <h3>Sign Up</h3>
      <form autoComplete="off">
        <label htmlFor="First Name">First Name: </label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="first name"
        />
        <label htmlFor="Last Name">Last Name: </label>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="last name"
        />
        <label htmlFor="email">Email Name: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email name"
        />
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          minLength="8"
        />
        <label htmlFor="password2">Confirm Password: </label>
        <input
          type="password"
          id="password2"
          name="password2"
          placeholder="confirm password" 
          minLength="8"
        />
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? 
        <button type="submit" onClick={handleClick}>Log In</button>
      </p>
    </div>
  )
}

export default SignUp