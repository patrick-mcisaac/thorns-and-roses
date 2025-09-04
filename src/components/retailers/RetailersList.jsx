import { useContext, useEffect } from "react"
import { RetailersContext } from "./RetailersProvider"
import { RetailFlowersList } from "./RetailFlowersList"

export const RetailersList = () => {
    const { retailers, getRetailers } = useContext(RetailersContext)

    useEffect(() => {
        getRetailers()
    }, [])

    return (
        <div className="flex flex-wrap items-start justify-around gap-10">
            {retailers.map(r => (
                <section
                    className="flex h-[36rem] w-[30rem] flex-col items-center justify-start rounded-xl border-1 p-[2rem]"
                    key={r.id}
                >
                    <h2 className="text-2xl font-semibold">{r.name}</h2>
                    <h2 className="mb-[2rem] text-lg">{r.address}</h2>
                    <div className="flex w-[100%] justify-between">
                        <RetailFlowersList id={r.id} />
                    </div>
                </section>
            ))}
        </div>
    )
}
