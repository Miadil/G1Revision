import React from "react"
import { NavLink } from "react-router-dom"

import "./Header.css"

const Header = () => {
  return (
    <header className="header-header">
      <div>
        <NavLink to="/" activeClassName="selected">
          Home
        </NavLink>
        <NavLink to="/characters" activeClassName="selected">
          Characters
        </NavLink>
      </div>
    </header>
  )
}

export default Header
