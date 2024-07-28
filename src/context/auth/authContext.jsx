import { createContext, useContext, useMemo } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = createContext(

);

export function UserProvider({children}) {
    // Create cookies
    const [cookies, setCookies, removeCookies] = useCookies();

    return <AuthContext.Provider>{children}</AuthContext.Provider>
};