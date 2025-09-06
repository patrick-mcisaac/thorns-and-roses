import { Link } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../shoppingCart/ShoppingCartProvider"
import { UserContext } from "../auth/UserProvider"

export const NavBar = () => {
    const [cartCount, setCartCount] = useState(0)
    const { myItems, getCartItemsByCustomerId } =
        useContext(ShoppingCartContext)
    const { currentUser } = useContext(UserContext)

    useEffect(() => {
        getCartItemsByCustomerId(currentUser)
    }, [currentUser])

    useEffect(() => {
        setCartCount(myItems.length)
    }, [myItems])
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
                <p className="text-xl font-semibold">My Cart({cartCount})</p>
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
