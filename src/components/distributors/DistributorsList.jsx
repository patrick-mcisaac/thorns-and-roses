import { useContext, useEffect, useState } from "react"
import { DistributorsContext } from "./DistributorsProvider"

export const DistributorsList = ({ id }) => {
  const { distributors, getDistributors } = useContext(DistributorsContext)
  const [filteredDistributors, setFilteredDistributors] = useState([])

  useEffect(() => {
    getDistributors()
  }, [])

  useEffect(() => {
    const checkDistributors = distributors.filter(d => d.nurseryId === id)
    setFilteredDistributors(checkDistributors)
  }, [distributors])

  return (
    <section>
      <h2 className="mb-[.5rem] text-xl font-semibold">Distributors</h2>
      <ul>
        {filteredDistributors.map(f => (
          <li key={f.id}>{f.distributor.name}</li>
        ))}
      </ul>
    </section>
  )
}
