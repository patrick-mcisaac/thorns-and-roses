import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./applicationViews/ApplicationViews"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Authorized } from "./applicationViews/Authorized"
import { UserProvider } from "./components/auth/UserProvider"

function App() {
    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <UserProvider>
                        <Login />
                    </UserProvider>
                }
            />
            <Route
                path="/Register"
                element={
                    <UserProvider>
                        <Register />
                    </UserProvider>
                }
            />

            <Route
                path="*"
                element={
                    <UserProvider>
                        <Authorized>
                            <ApplicationViews />
                        </Authorized>
                    </UserProvider>
                }
            />
        </Routes>
    )
}

export default App
