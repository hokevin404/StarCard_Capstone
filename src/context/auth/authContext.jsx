import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext(

);

export function UserProvider({children}) {
    // Create cookies
    const [cookies, setCookies, removeCookies] = useCookies();

    // Login Function
    const login = async (formData) => {
        try {

        } catch (error) {
            console.error(error)
        }
    }

    // SignUp Function
    const signUp = async (formData) => {
        try {
            
        } catch (error) {
            console.error(error)
        }
    }

    return <AuthContext.Provider>{children}</AuthContext.Provider>
};