import { createContext, useState } from "react"

export const DistributorsContext = createContext()

export const DistributorsProvider = props => {
    const [distributors, setDistributors] = useState([])
    const [embedDistributors, setEmbedDistributors] = useState([])

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

    const getEmbedDistributors = () => {
        fetch(
            `http://localhost:8088/distributors?_embed=nurseryDistributorBridge&_embed=retailers`
        )
            .then(res => res.json())
            .then(setEmbedDistributors)
    }

    return (
        <DistributorsContext.Provider
            value={{
                distributors,
                setDistributors,
                getDistributors,
                getDistributorsById,
                getEmbedDistributors,
                embedDistributors
            }}
        >
            {props.children}
        </DistributorsContext.Provider>
    )
}
