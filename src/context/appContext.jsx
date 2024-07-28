import { UserProvider } from "./auth/authContext";

function AppProvider({children}) {
    return <UserProvider>{children}</UserProvider>
}

export default AppProvider;