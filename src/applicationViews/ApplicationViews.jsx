import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/navBar/NavBar"

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<h1>Home Page</h1>} />
          <Route path="nurseries" element={<h1>Nurseries Page</h1>} />
          <Route path="distributors" element={<h1>Distributors Page</h1>} />
          <Route path="retailers" element={<h1>Retailers Page</h1>} />
        </Route>
      </Routes>
    </>
  )
}
