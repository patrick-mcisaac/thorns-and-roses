import { createContext, useState } from "react"

export const DistributorsContext = createContext()

export const DistributorsProvider = props => {
    const [distributors, setDistributors] = useState([])

    const getDistributors = () => {
        fetch(
            `http://localhost:8088/nurseryDistributorBridge?_expand=nursery&_expand=distributor`
        )
            .then(res => res.json())
            .then(setDistributors)
    }

    const getDistributorsById = id => {
        return fetch(
            `http://localhost:8088/nurseryDistributorBridge?distributorId=${id}&_expand=nursery&_expand=distributor`
        ).then(res => res.json())
    }

    return (
        <DistributorsContext.Provider
            value={{
                distributors,
                setDistributors,
                getDistributors,
                getDistributorsById
            }}
        >
            {props.children}
        </DistributorsContext.Provider>
    )
}
