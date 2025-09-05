import { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const [userLogin, setUserLogin] = useState([
        {
            email: "",
            password: ""
        }
    ])

    const { getUsers, users } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        getUsers()
    }, [])

    const handleChange = e => {
        const copyUserLogin = { ...userLogin }
        copyUserLogin[e.target.id] = e.target.value
        setUserLogin(copyUserLogin)
    }

    const handleClick = e => {
        e.preventDefault()
        if (userLogin.email !== "" && userLogin.password !== "") {
            console.log("Users array:", users)
            const found = users.find(u => u.email === userLogin.email)

            if (found) {
                console.log("found", found)
                localStorage.setItem("currentUserId", found.id)
                setUserLogin({ email: "", password: "" })
                navigate("/")
            }
        } else {
            window.alert("fill out form")
        }
    }
    return (
        <form action="" name="form">
            <fieldset>
                <label htmlFor="email">Email</label>
                <input
                    onChange={handleChange}
                    value={userLogin.email}
                    type="email"
                    id="email"
                />
            </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label>
                <input
                    onChange={handleChange}
                    value={userLogin.password}
                    type="password"
                    name="password"
                    id="password"
                />
            </fieldset>
            <button onClick={handleClick}>Login</button>
            <button
                onClick={e => {
                    e.preventDefault()
                    navigate("/register")
                }}
            >
                Register
            </button>
        </form>
    )
}
