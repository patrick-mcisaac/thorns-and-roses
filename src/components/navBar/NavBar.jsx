import { Link } from "react-router-dom"
import React from "react"

export const NavBar = () => {
    return (
        <nav className="flex h-[5rem] items-center justify-between gap-[5rem] p-[3rem]">
            <Link to="/nurseries">
                <p className="text-xl font-semibold">Nurseries</p>
            </Link>
            <Link to="/distributors">
                <p className="text-xl font-semibold">Distributors</p>
            </Link>
            <Link to="/retailers">
                <p className="text-xl font-semibold">Retailers</p>
            </Link>
            <Link to="/cart">
                <p className="text-xl font-semibold">Shopping Cart</p>
            </Link>

            <Link
                onClick={() => {
                    localStorage.removeItem("currentUserId")
                }}
                to="/"
            >
                <p className="text-xl font-semibold">Logout</p>
            </Link>
        </nav>
    )
}
