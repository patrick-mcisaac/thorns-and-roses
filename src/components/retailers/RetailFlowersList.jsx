import { useContext, useEffect, useState } from "react"
import { FlowersContext } from "../flowers/FlowersProvider"

import { NurseriesContext } from "../nurseries/NurseriesProvider"
import { RetailersContext } from "./RetailersProvider"
import { DistributorsContext } from "../distributors/DistributorsProvider"

export const RetailFlowersList = ({ id }) => {
    // id is retailers id
    const [retailer, setRetailer] = useState({})
    const [distributorNurseries, setDistributorNurseries] = useState([])
    const [filteredFlowers, setFilteredFlowers] = useState([])

    // need all flowers
    const { flowers, getFlowers } = useContext(FlowersContext)

    // need distributors that i can buy from
    const { getRetailerById } = useContext(RetailersContext)
    // retailer.distributor.id

    const { getDistributorsById } = useContext(DistributorsContext)

    // need to get the price of flowers with both markups

    useEffect(() => {
        getFlowers()
        getRetailerById(id).then(setRetailer)
    }, [])

    useEffect(() => {
        getDistributorsById(retailer.distributor?.id).then(
            setDistributorNurseries
        )
    }, [retailer])

    // need to get the flowers that the distributor has
    useEffect(() => {
        // check flowers against nursery id from distributorNurseries

        const found = []
        for (const flower of flowers) {
            for (const nursery of distributorNurseries) {
                if (nursery.nurseryId === flower.nurseryId) {
                    found.push(flower)
                }
            }
        }

        const reducedFound = found.reduce((acc, cur) => {
            if (!acc.find(obj => obj.flower.species === cur.flower.species)) {
                acc.push(cur)
            }
            return acc
        }, [])

        setFilteredFlowers(reducedFound)
    }, [distributorNurseries, flowers])

    // get price of flower

    return (
        <section className="flex flex-col items-center justify-start">
            <h2 className="mb-[.5rem] text-xl font-semibold">Flowers</h2>
            <ul className="flex h-[25rem] flex-col flex-wrap gap-[.5rem_2rem]">
                {filteredFlowers.map(flower => (
                    <div className="flex flex-col" key={flower.id}>
                        <li className="font-semibold">{flower.flower.color}</li>
                        <li>{flower.flower.species}</li>
                    </div>
                ))}
            </ul>
        </section>
    )
}
