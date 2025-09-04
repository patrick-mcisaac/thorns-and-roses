import { useContext, useEffect, useState } from "react"
import { RetailersContext } from "../retailers/RetailersProvider"

export const DistributorsRetailers = ({ id }) => {
  const { retailers, getRetailers } = useContext(RetailersContext)
  const [filteredRetailers, setFilteredRetailers] = useState([])

  useEffect(() => {
    getRetailers()
  }, [])

  useEffect(() => {
    const found = retailers.filter(r => r.distributorId === id)
    setFilteredRetailers(found)
  }, [retailers, id])

  return (
    <section>
      <h2 className="mb-[.5rem] text-xl font-semibold">Retailers</h2>
      <ul>
        {filteredRetailers.map(r => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </section>
  )
}
