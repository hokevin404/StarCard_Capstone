import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext(

);

export function UserProvider({ children }) {
    // Create cookies
    const [cookies, setCookies, removeCookie] = useCookies();

    // Login Function
    const login = async (formData) => {
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
    const signUp = async (formData) => {
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

    const logout = () => {
        ['token'].forEach((obj) => removeCookie(obj));
    }

    return <AuthContext.Provider>{children}</AuthContext.Provider>
};