import { useContext, useEffect } from "react"
import { RetailersContext } from "./RetailersProvider"
import { RetailFlowersList } from "./RetailFlowersList"
import { RetailDistributorsList } from "./RetailDistributorsList"
import { RetailersNurseriesList } from "./RetailersNurseriesList"

export const RetailersList = () => {
    const { retailers, getRetailers } = useContext(RetailersContext)

    useEffect(() => {
        getRetailers()
    }, [])

    return (
        <div className="flex flex-wrap items-start justify-center gap-10">
            {retailers.map(r => (
                <section
                    className="flex h-[35rem] w-[90rem] flex-col items-center justify-center rounded-xl border-1 p-[2rem]"
                    key={r.id}
                >
                    <h2 className="text-2xl font-semibold">{r.name}</h2>
                    <h2 className="mb-[2rem] text-lg">{r.address}</h2>
                    <div className="flex w-[100%] justify-evenly">
                        <RetailFlowersList retailer={r} />
                        <div className="flex h-[100%] flex-col justify-start gap-[5rem_0]">
                            <RetailDistributorsList retailer={r} />
                            <RetailersNurseriesList id={r.distributorId} />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}
