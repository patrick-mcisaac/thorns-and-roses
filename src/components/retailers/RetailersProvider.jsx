import { createContext, useState } from "react"

export const RetailersContext = createContext()

export const RetailersProvider = props => {
    const [retailers, setRetailers] = useState([])
    const [retailer, setRetailer] = useState([])

    const getRetailers = () => {
        fetch(`http://localhost:8088/retailers`)
            .then(res => res.json())
            .then(setRetailers)
    }

    const getRetailerById = id => {
        fetch(`http://localhost:8088/retailers/${id}?_expand=distributor`)
            .then(res => res.json())
            .then(setRetailer)
    }

    return (
        <RetailersContext.Provider
            value={{
                retailers,
                setRetailers,
                getRetailers,
                retailer,
                setRetailer,
                getRetailerById
            }}
        >
            {props.children}
        </RetailersContext.Provider>
    )
}
