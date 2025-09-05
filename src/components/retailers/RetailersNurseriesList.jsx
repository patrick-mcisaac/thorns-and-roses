import { useContext, useEffect, useState } from "react"
import { DistributorsContext } from "../distributors/DistributorsProvider"

export const RetailersNurseriesList = ({ id }) => {
    const [distributors, setDistributors] = useState([])
    const { getDistributorsById } = useContext(DistributorsContext)

    useEffect(() => {
        getDistributorsById(id).then(setDistributors)
    }, [])

    return (
        <section>
            <h3 className="text-xl font-semibold">Nurseries</h3>
            <ul>
                {distributors.map(d => (
                    <li key={d.id}>{d.nursery.name}</li>
                ))}
            </ul>
        </section>
    )
}
