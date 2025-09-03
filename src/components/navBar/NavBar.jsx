import { Link } from "react-router-dom"
import React from "react"

export const NavBar = () => {
  return (
    <nav className="flex h-[5rem] items-center pl-[3rem] gap-[5rem]">
      <Link to="/nurseries">
        <p className="text-xl font-semibold">Nurseries</p>
      </Link>
      <Link to="/distributors">
        <p className="text-xl font-semibold">Distributors</p>
      </Link>
      <Link to="/retailers">
        <p className="text-xl font-semibold">Retailers</p>
      </Link>
    </nav>
  )
}
