import { useContext, useEffect } from "react"
import { FlowersContext } from "../flowers/FlowersProvider"
import { RetailersContext } from "./RetailersProvider"
import { NurseriesContext } from "../nurseries/NurseriesProvider"

export const RetailFlowersList = ({ id }) => {
    // need all flowers
    const { flowers, getFlowers } = useContext(FlowersContext)
    // need distributors that i can buy from
    const { retailer, getRetailerById } = useContext(RetailersContext)

    // need to get nurseries
    // http://localhost:8088/nurseries?_embed=flowerNurseryBridge&_embed=nurseryDistributorBridge

    const { getNurseriesEmbeded, embedNurseries } = useContext(NurseriesContext)

    // need to get the flowers that the distributor has
    // need to get the price of flowers with both markups

    useEffect(() => {
        getFlowers()
        getRetailerById(id)
        getNurseriesEmbeded()
    }, [])

    return <section></section>
}
