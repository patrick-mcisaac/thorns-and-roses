import { useContext, useEffect, useState } from "react"
import { FlowersContext } from "./FlowersProvider"

export const FlowersList = ({ id }) => {
  const { flowers, getFlowers } = useContext(FlowersContext)
  const [filteredFlowers, setFilteredFlowers] = useState([])

  useEffect(() => {
    getFlowers()
  }, [])

  useEffect(() => {
    const checkFlowers = flowers.filter(f => f.nurseryId === id)

    setFilteredFlowers(checkFlowers)
  }, [id, flowers])

  return (
    <section>
      <h2 className="mb-[.5rem] text-xl font-semibold">Flowers</h2>
      <ul>
        {filteredFlowers.map(f => (
          <li key={f.id}>{f.flower.species}</li>
        ))}
      </ul>
    </section>
  )
}
