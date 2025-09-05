import { useContext, useState } from "react"
import { UserContext } from "./UserProvider"

export const Register = () => {
    // register with name, business name, email and password
    // update to DB
    const [newUser, setNewUser] = useState({
        name: "",
        businessName: "",
        email: "",
        password: ""
    })

    const { addUser } = useContext(UserContext)

    const handleChange = e => {
        const copyUser = { ...newUser }
        copyUser[e.target.id] = e.target.value
        setNewUser(copyUser)
    }

    const handleClick = e => {
        e.preventDefault()
        if (
            newUser.name !== "" &&
            newUser.businessName !== "" &&
            newUser.email !== "" &&
            newUser.password !== ""
        ) {
            addUser(newUser)
            setNewUser({
                name: "",
                businessName: "",
                email: "",
                password: ""
            })
        } else {
            window.alert("fill out the form")
        }
    }

    return (
        <form
            name="form"
            className="m-auto mt-5 flex w-[30rem] flex-col items-center gap-10 rounded-2xl border-1 p-5 shadow-2xl"
            action="#"
        >
            <h1 className="text-[3rem] font-semibold tracking-wider">
                Register
            </h1>
            <fieldset className="flex flex-col items-center justify-start gap-2">
                <label className="text-xl" htmlFor="name">
                    Name
                </label>
                <input
                    className="rounded-2xl border-1 pl-2"
                    onChange={handleChange}
                    type="text"
                    id="name"
                    required
                    placeholder="Name"
                    value={newUser.name}
                />
            </fieldset>
            <fieldset className="flex flex-col items-center justify-start gap-2">
                <label className="text-xl" htmlFor="businessName">
                    Business Name
                </label>
                <input
                    className="rounded-2xl border-1 pl-2"
                    onChange={handleChange}
                    type="text"
                    id="businessName"
                    required
                    placeholder="Business Name"
                    value={newUser.businessName}
                />
            </fieldset>
            <fieldset className="flex flex-col items-center justify-start gap-2">
                <label className="text-xl" htmlFor="email">
                    Email
                </label>
                <input
                    className="rounded-2xl border-1 pl-2"
                    onChange={handleChange}
                    type="text"
                    id="email"
                    required
                    placeholder="Email"
                    value={newUser.email}
                />
            </fieldset>
            <fieldset className="flex flex-col items-center justify-start gap-2">
                <label className="text-xl" htmlFor="password">
                    Password
                </label>
                <input
                    className="rounded-2xl border-1 pl-2"
                    onChange={handleChange}
                    type="password"
                    id="password"
                    required
                    placeholder="Password"
                    value={newUser.password}
                />
            </fieldset>
            <button
                className="h-[2rem] w-[5rem] cursor-pointer rounded-2xl border-1 text-center transition hover:scale-110"
                onClick={handleClick}
            >
                Register
            </button>
        </form>
    )
}
