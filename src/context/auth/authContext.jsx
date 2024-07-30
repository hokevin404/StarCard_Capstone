import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import {jwtDecode} from 'jwt-decode';

const AuthContext = createContext();

export function UserProvider({ children }) {
    // Create cookies
    const [cookies, setCookies, removeCookie] = useCookies();
    // Create user state
    const [user, setUser] = useState(null);

    // Login Function
    async function login(formData) {
        try {
            // Make call to backend
            let res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:3000/api/users/login',
                data: formData,
                // headers: {'x-auth-token': cookies.token} // to get token
            })

            // Set token to cookies
            setCookies('token', res.data.token);

            // Decode token for username and ID
            // console.log(res.data.token);
            const decoded = jwtDecode(res.data.token);
            // console.log(decoded);
            // console.log(decoded.user.id);
            setUser({...user, id: decoded.user.id, username: decoded.user.username});
            // setUser({...user, id: "TEST", username: 1515615});

            // console.log(JSON.stringify(user));
        } catch (error) {
            console.error(error)
        }
    }

    // useEffect(()=>{
    //     console.log(user)
    // }, [user])

    // SignUp Function
    async function signUp(formData) {
        try {
            // Make call to backend
            let res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:3000/api/users/signup',
                data: formData
            })

            // Set token to cookies
            setCookies('token', res.data.token);
        } catch (error) {
            console.error(error)
        }
    };

    // Logout function
    function logout() {
        // remove all tokens from cookie
        ['token'].forEach((obj) => removeCookie(obj));
    }

    // Re-render functions if any changes are detected
    const value = useMemo(() => ({
        cookies,
        login,
        signUp,
        logout,
        user
    }), [cookies, user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

// Function export to return all values of Auth useContext
export function useAuth() {
    return useContext(AuthContext);
};