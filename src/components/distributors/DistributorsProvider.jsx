import { createContext, useState } from "react"

export const DistributorsContext = createContext()

export const DistributorsProvider = props => {
  const [distributors, setDistributors] = useState([])

  const getDistributors = () => {
    fetch(
      `http://localhost:8088/nurseryDistributorBridge?_expand=nursery&_expand=distributor`
    )
      .then(res => res.json())
      .then(setDistributors)
  }

  return (
    <DistributorsContext.Provider
      value={{ distributors, setDistributors, getDistributors }}
    >
      {props.children}
    </DistributorsContext.Provider>
  )
}
