import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    // get users
    const getUsers = () => {
        fetch(`http://localhost:8088/users`)
            .then(res => res.json())
            .then(setUsers)
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
        <UserContext.Provider value={{ users, setUsers, getUsers, addUser }}>
            {children}
        </UserContext.Provider>
    )
}
