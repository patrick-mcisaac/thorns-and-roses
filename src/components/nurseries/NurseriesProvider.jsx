import { createContext, useEffect, useState } from "react"

export const NurseriesContext = createContext()

export const NurseriesProvider = props => {
    const [nurseries, setNurseries] = useState([])
    const [embedNurseries, setEmbedNurseries] = useState([])

    useEffect(() => {}, [])

    const getNurseries = () => {
        fetch(`http://localhost:8088/nurseries`)
            .then(res => res.json())
            .then(setNurseries)
    }

    const getNurseriesEmbeded = () => {
        fetch(
            `http://localhost:8088/nurseries?_embed=flowerNurseryBridge&_embed=nurseryDistributorBridge`
        )
            .then(res => res.json())
            .then(setEmbedNurseries)
    }

    return (
        <NurseriesContext.Provider
            value={{
                nurseries,
                setNurseries,
                getNurseries,
                getNurseriesEmbeded,
                embedNurseries
            }}
        >
            {props.children}
        </NurseriesContext.Provider>
    )
}
