import { Link } from "react-router-dom"
import React from "react"

export const NavBar = () => {
    return (
        <nav className="flex h-[5rem] items-center justify-between gap-[5rem] pl-[3rem]">
            <div className="flex items-center gap-[10rem]">
                <Link to="/nurseries">
                    <p className="text-xl font-semibold">Nurseries</p>
                </Link>
                <Link to="/distributors">
                    <p className="text-xl font-semibold">Distributors</p>
                </Link>
                <Link to="/retailers">
                    <p className="text-xl font-semibold">Retailers</p>
                </Link>
            </div>

            <div className="mr-[5rem] flex items-center">
                <Link
                    onClick={() => {
                        localStorage.removeItem("currentUserId")
                    }}
                    to="/"
                >
                    <p className="text-xl font-semibold">Logout</p>
                </Link>
            </div>
        </nav>
    )
}
