import { useContext, useEffect } from "react"
import { DistributorsContext } from "./DistributorsProvider"
import { DistributorsFlowers } from "./DistributorsFlowers"

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
            className="flex h-[20rem] w-[30rem] flex-col items-center justify-start rounded-xl border-1 p-[2rem]"
            key={d.id}
          >
            <h2 className="mb-[2rem] text-2xl">{d.distributor.name}</h2>
            <DistributorsFlowers
              id={d.distributor.id}
              distributors={distributors}
            />
          </section>
        )
      })}
    </div>
  )
}
