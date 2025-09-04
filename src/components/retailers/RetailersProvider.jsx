import { createContext, useState } from "react"

export const RetailersContext = createContext()

export const RetailersProvider = props => {
  const [retailers, setRetailers] = useState([])

  const getRetailers = () => {
    fetch(`http://localhost:8088/retailers`)
      .then(res => res.json())
      .then(setRetailers)
  }

  return (
    <RetailersContext.Provider
      value={{ retailers, setRetailers, getRetailers }}
    >
      {props.children}
    </RetailersContext.Provider>
  )
}
