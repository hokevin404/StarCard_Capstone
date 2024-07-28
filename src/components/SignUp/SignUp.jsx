import './signup.css';

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth/authContext";

function SignUp({setNewUser}) {
  const nav = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    username: '',
    password: '',
    password2: ''
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if(formData.password !== formData.password2)
        throw "Password does not match"
      else {
        await signUp(formData);
        nav('/dashboard'); 
      };
    } catch (error) {
      console.error(error);
    };
  };

  function handleClick() {
    setNewUser(false);
  }

  return (
    <div className="signupContainer">
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
      <div className="form-group">
        <label htmlFor="First Name">First Name: </label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="first name"
          onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="Last Name">Last Name: </label>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="last name"
          onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email Name: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email name"
          onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          minLength="8"
          onChange={handleChange}
        />
        </div>
        <div className="form-group">
        <label htmlFor="password2">Confirm Password: </label>
        <input
          type="password"
          id="password2"
          name="password2"
          placeholder="confirm password" 
          minLength="8"
          onChange={handleChange}
        />
        </div>
        <button className='signUpBtn' type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? 
        <button className='loginBtn' type="submit" onClick={handleClick}>Log In</button>
      </p>
    </div>
  )
}

export default SignUp