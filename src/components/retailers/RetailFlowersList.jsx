import { useContext, useEffect, useState } from "react"
import { FlowersContext } from "../flowers/FlowersProvider"

import { DistributorsContext } from "../distributors/DistributorsProvider"
import { ShoppingCartContext } from "../shoppingCart/ShoppingCartProvider"
import { UserContext } from "../auth/UserProvider"

export const RetailFlowersList = ({ retailer }) => {
    const [distributorNurseries, setDistributorNurseries] = useState([])
    const [filteredFlowers, setFilteredFlowers] = useState([])

    // need all flowers
    const { flowers, getFlowers } = useContext(FlowersContext)
    const { getDistributorsById } = useContext(DistributorsContext)
    const { addItemToCart, getCartItemsByCustomerId, myItems } =
        useContext(ShoppingCartContext)
    const { currentUser } = useContext(UserContext)

    // need to get the price of flowers with both markups

    useEffect(() => {
        getFlowers()
    }, [])

    useEffect(() => {
        getDistributorsById(retailer?.distributorId).then(
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

    return (
        <section className="flex flex-col items-center justify-start">
            <h2 className="mb-[.5rem] text-xl font-semibold">Flowers</h2>
            <ul className="flex h-[25rem] flex-col flex-wrap items-start gap-[.5rem_2rem]">
                {filteredFlowers.map(flower => (
                    <div className="flex w-[12.5rem] flex-col" key={flower.id}>
                        <li className="font-semibold">{flower.flower.color}</li>
                        <li className="font-semibold">
                            {flower.flower.species}
                        </li>
                        <li>
                            {(
                                flower.price *
                                distributorNurseries[0].distributor.markup *
                                retailer?.markup
                            ).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD"
                            })}
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    const item = {
                                        customerId: currentUser,
                                        retailerId: retailer.id,
                                        flowerId: flower.flower.id
                                    }

                                    addItemToCart(item).then(res => {
                                        getCartItemsByCustomerId(currentUser)
                                    })
                                }}
                            >
                                Purchase
                            </button>
                        </li>
                    </div>
                ))}
            </ul>
        </section>
    )
}
