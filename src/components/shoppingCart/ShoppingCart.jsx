import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "./ShoppingCartProvider"
import { UserContext } from "../auth/UserProvider"
import { FlowersContext } from "../flowers/FlowersProvider"
import {
    DistributorsContext,
    DistributorsProvider
} from "../distributors/DistributorsProvider"

export const ShoppingCart = () => {
    // i have retailer id, flower id, and customer id from cart items
    const [filteredItems, setFilteredItems] = useState([])
    const [myDistributors, setMyDistributors] = useState([])
    // find which nurseries use this distributor then get flower price

    // I have nursery ids and basic price from here
    // need to find which nursery i got it from
    const [flowerPrices, setFlowerPrices] = useState([])

    const { myItems, getCartItemsByCustomerId } =
        useContext(ShoppingCartContext)

    const { getEmbedDistributors, embedDistributors } =
        useContext(DistributorsContext)

    const { currentUser } = useContext(UserContext)
    const { getFlowers, flowers } = useContext(FlowersContext)

    useEffect(() => {
        getCartItemsByCustomerId(currentUser)
    }, [currentUser])

    useEffect(() => {
        getFlowers()
        getEmbedDistributors()
    }, [])

    useEffect(() => {
        const filteredOut = flowers.filter(flower => {
            for (const item of filteredItems) {
                if (item.flowerId === flower.flowerId) {
                    return flower.price
                }
            }
        })
        setFlowerPrices(filteredOut)
    }, [filteredItems])

    // ue to filter so there is only one of each for the table data
    useEffect(() => {
        const reducedItems = myItems.reduce((acc, cur) => {
            const found = acc.find(a => a.flower?.id === cur.flower?.id)
            if (!found) {
                acc.push(cur)
            }
            return acc
        }, [])
        setFilteredItems(reducedItems)
    }, [myItems])

    // this would give me distributor markup, nurseries and retailers
    // then i can loop through them and find which distributor i used based off of retailer id
    // http://localhost:8088/distributors?_embed=nurseryDistributorBridge&_embed=retailers
    useEffect(() => {
        const filteredDistributors = embedDistributors.filter(distributor => {
            for (const item of filteredItems) {
                for (const retailer of distributor.retailers) {
                    if (item.retailerId === retailer.id) {
                        return true
                    }
                }
            }
        })

        setMyDistributors(filteredDistributors)
    }, [filteredItems])

    return (
        <div>
            <table className="mt-[4rem] flex flex-col items-center">
                <thead>
                    <tr>
                        <th className="w-[12rem] border-1 p-2">Flower</th>
                        <th className="w-[7rem] border-1 p-2">Quantity</th>
                        <th className="w-[6rem] border-1 p-2">Cost</th>
                    </tr>
                </thead>
                <tbody className="flex flex-col">
                    {filteredItems.map(item => {
                        // find og flower price
                        const flower = flowerPrices.find(
                            f => f.flowerId === item.flowerId
                        )

                        let price = flower?.price

                        // find distributor price
                        myDistributors.find(d => {
                            for (const retailer of d.retailers) {
                                if (retailer.id === item.retailerId) {
                                    price *= retailer.markup * d.markup
                                }
                            }
                        })

                        return (
                            <tr
                                className="flex items-center justify-center"
                                key={item.id}
                            >
                                <td className="flex h-[4rem] w-[12rem] items-center border-1 p-2">
                                    {item.flower?.species}
                                </td>
                                <td className="flex h-[4rem] w-[7rem] items-center justify-center border-1 p-2">
                                    {
                                        myItems.filter(
                                            i =>
                                                i.flower?.id === item.flower?.id
                                        ).length
                                    }
                                </td>
                                <td className="flex h-[4rem] w-[6rem] items-center justify-end border-1 p-2">
                                    {price?.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD"
                                    })}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
