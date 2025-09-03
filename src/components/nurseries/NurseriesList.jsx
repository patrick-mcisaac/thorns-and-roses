import { useContext, useEffect } from "react"
import { NurseriesContext } from "./NurseriesProvider"
import { NurseryDistributorList } from "./NurseryDistributor"
import { NurseryFlowersList } from "./NurseryFlowersList"

export const NurseriesList = () => {
  const { nurseries, getNurseries } = useContext(NurseriesContext)

  useEffect(() => {
    getNurseries()
  }, [])

  return (
    <div className="flex flex-wrap items-start justify-around gap-10">
      {nurseries.map(n => {
        return (
          <section
            className="flex h-[20rem] w-[30rem] flex-col items-center justify-start rounded-xl border-1 p-[2rem]"
            key={n.id}
          >
            <h2 className="mb-[2rem] text-2xl">{n.name}</h2>
            <div className="flex w-[100%] justify-between">
              <NurseryFlowersList id={n.id} />
              <NurseryDistributorList id={n.id} />
            </div>
          </section>
        )
      })}
    </div>
  )
}
