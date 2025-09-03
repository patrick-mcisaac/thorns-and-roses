import { createContext, useState } from "react"

export const FlowersContext = createContext()

export const FlowersProvider = props => {
  const [flowers, setFlowers] = useState([])

  const getFlowers = () => {
    fetch(
      `http://localhost:8088/flowerNurseryBridge?_expand=flower&_expand=nursery`
    )
      .then(res => res.json())
      .then(setFlowers)
  }

  return (
    <FlowersContext.Provider
      value={{
        flowers,
        setFlowers,
        getFlowers
      }}
    >
      {props.children}
    </FlowersContext.Provider>
  )
}
