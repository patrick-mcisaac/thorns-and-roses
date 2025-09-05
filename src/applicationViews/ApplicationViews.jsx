import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navBar/NavBar"
import { Nurseries } from "../components/nurseries/Nurseries"
import { NurseriesProvider } from "../components/nurseries/NurseriesProvider"
import { FlowersProvider } from "../components/flowers/FlowersProvider"
import { DistributorsProvider } from "../components/distributors/DistributorsProvider"
import { Distributors } from "../components/distributors/Distributors"
import { RetailersProvider } from "../components/retailers/RetailersProvider"
import { Retailers } from "../components/retailers/Retailers"
import { Register } from "../components/auth/Register"
import { UserProvider } from "../components/auth/UserProvider"
import { Login } from "../components/auth/Login"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar />
                            <UserProvider>
                                <RetailersProvider>
                                    <DistributorsProvider>
                                        <FlowersProvider>
                                            <NurseriesProvider>
                                                <Outlet />
                                            </NurseriesProvider>
                                        </FlowersProvider>
                                    </DistributorsProvider>
                                </RetailersProvider>
                            </UserProvider>
                        </>
                    }
                >
                    <Route index element={<h1>Home Page</h1>} />
                    <Route path="nurseries" element={<Nurseries />} />
                    <Route path="distributors" element={<Distributors />} />
                    <Route path="retailers" element={<Retailers />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </>
    )
}
