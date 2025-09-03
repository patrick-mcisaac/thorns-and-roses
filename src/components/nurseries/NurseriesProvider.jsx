import { createContext, useEffect, useState } from "react"

export const NurseriesContext = createContext()

export const NurseriesProvider = props => {
  const [nurseries, setNurseries] = useState([])

  useEffect(() => {}, [])

  const getNurseries = () => {
    fetch(`http://localhost:8088/nurseries`)
      .then(res => res.json())
      .then(setNurseries)
  }

  return (
    <NurseriesContext.Provider
      value={{ nurseries, setNurseries, getNurseries }}
    >
      {props.children}
    </NurseriesContext.Provider>
  )
}
