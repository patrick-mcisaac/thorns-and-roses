import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [myItems, setMyItems] = useState([])

    const addItemToCart = item => {
        fetch(`http://localhost:8088/shoppingCarts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
    }

    const getCartItemsByCustomerId = id => {
        fetch(
            `http://localhost:8088/shoppingCarts?customerId=${id}&_expand=flower`
        )
            .then(res => res.json())
            .then(setMyItems)
    }

    return (
        <ShoppingCartContext.Provider
            value={{ addItemToCart, getCartItemsByCustomerId, myItems }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}
