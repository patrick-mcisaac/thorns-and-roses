import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const addItemToCart = item => {
        fetch(`http://localhost:8088/shoppingCarts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ addItemToCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
