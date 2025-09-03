import { useContext, useEffect, useState } from "react"
import { FlowersContext } from "../flowers/FlowersProvider"
import { Link } from "react-router-dom"

// get distributors bridge expanded nursery to get a nursery Id that has the current distributors distributorId

// get flower nursery bridge and find nurseryId that matches from lists above.  then get all the flowers species

// create ul and list the names

export const DistributorsFlowers = ({ id, distributors }) => {
  const { flowers, getFlowers } = useContext(FlowersContext)
  const [filteredNursery, setFilteredNursery] = useState([])
  const [filteredFlowers, setFilteredFlowers] = useState([])
  // filter out duplicates

  useEffect(() => {
    getFlowers()
  }, [])

  useEffect(() => {
    const checkDisId = distributors.filter(d => {
      return d.distributorId === id
    })

    setFilteredNursery(checkDisId)
  }, [distributors, id])

  useEffect(() => {
    let found = []
    for (const nursery of filteredNursery) {
      for (const flower of flowers) {
        flower.nurseryId === nursery.nurseryId && found.push(flower)
      }
    }

    setFilteredFlowers(found)
  }, [flowers, filteredNursery])

  // filter out duplicates????

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
