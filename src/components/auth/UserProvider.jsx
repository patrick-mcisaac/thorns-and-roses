import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState({})

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
    useEffect(() => {
        const localUser = localStorage.getItem("currentUserId")
        const userObject = JSON.parse(localUser)
        setCurrentUser(userObject)
    }, [])

    return (
        <UserContext.Provider
            value={{ currentUser, users, setUsers, getUsers, addUser }}
        >
            {children}
        </UserContext.Provider>
    )
}
