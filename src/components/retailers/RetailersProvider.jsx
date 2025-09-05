import { createContext, useState } from "react"

export const RetailersContext = createContext()

export const RetailersProvider = props => {
    const [retailers, setRetailers] = useState([])

    // probabaly move this state to retail flowerslist

    const getRetailers = () => {
        // get all retailers
        fetch(`http://localhost:8088/retailers?_expand=distributor`)
            .then(res => res.json())
            .then(setRetailers)
    }
    // TODO: i can get rid of this if i just use propdrillsc
    const getRetailerById = id => {
        // gets one retailer and distributor for them
        return fetch(
            `http://localhost:8088/retailers/${id}?_expand=distributor`
        ).then(res => res.json())
    }

    return (
        <RetailersContext.Provider
            value={{
                retailers,
                setRetailers,
                getRetailers,

                getRetailerById
            }}
        >
            {props.children}
        </RetailersContext.Provider>
    )
}
