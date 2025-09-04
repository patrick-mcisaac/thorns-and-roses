import { useContext, useEffect } from "react"
import { DistributorsContext } from "./DistributorsProvider"
import { DistributorsFlowers } from "./DistributorsFlowers"
import { DistributorsRetailers } from "./DistributorsRetailers"

export const DistributorsList = () => {
  const { distributors, getDistributors } = useContext(DistributorsContext)

  useEffect(() => {
    getDistributors()
  }, [])

  return (
    <div className="flex flex-wrap items-start justify-around gap-10">
      {distributors.map(d => {
        return (
          <section
            className="flex h-[32rem] w-[30rem] flex-col items-center justify-start rounded-xl border-1 p-[2rem]"
            key={d.id}
          >
            <h2 className="mb-[2rem] text-2xl">{d.distributor.name}</h2>
            <div className="flex w-[100%] justify-between">
              <DistributorsFlowers
                id={d.distributor.id}
                distributors={distributors}
              />
              <DistributorsRetailers id={d.distributor.id} />
            </div>
          </section>
        )
      })}
    </div>
  )
}
