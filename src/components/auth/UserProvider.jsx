import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})

    // get users
    const getUser = id => {
        fetch(`http://localhost:8088/users/${id}`)
            .then(res => res.json())
            .then(setUser)
    }

    const addUser = data => {
        fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <UserContext.Provider value={{ user, setUser, getUser, addUser }}>
            {children}
        </UserContext.Provider>
    )
}
