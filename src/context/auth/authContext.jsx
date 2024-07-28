import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext(

);

export function UserProvider({ children }) {
    // Create cookies
    const [cookies, setCookies, removeCookie] = useCookies();

    // Login Function
    async function login(formData) {
        try {
            // Make call to backend
            let res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:3000/api/users/login',
                data: formData
            })

            // Set token to cookies
            setCookies('token', res.data.token);
        } catch (error) {
            console.error(error)
        }
    }

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
        logout
    }), [cookies]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};