import { createContext, useState } from "react"

export const FlowersContext = createContext()

export const FlowersProvider = props => {
    const [flowers, setFlowers] = useState([])

    const getFlowers = () => {
        fetch(
            `http://localhost:8088/flowerNurseryBridge?_expand=flower&_expand=nursery`
        )
            .then(res => res.json())
            .then(setFlowers)
    }

    const getFlowersById = id => {
        return fetch(
            `http://localhost:8088/flowerNurseryBridge?_expand=flower&_expand=nursery&flowerId=${id}`
        ).then(res => res.json())
    }

    return (
        <FlowersContext.Provider
            value={{
                flowers,
                setFlowers,
                getFlowers,
                getFlowersById
            }}
        >
            {props.children}
        </FlowersContext.Provider>
    )
}
