import React, { useState } from "react"
import "../styles/header.scss"
import { Menu as MenuIcon, X } from "react-feather"
import { Link, navigate } from "gatsby"
import logo from "../images/logoNew.svg"
import { Burger } from "./header/hamburger"
import { Menu } from "./header/menu"

export default ({ location }) => {
  const [isOpen, setOpen] = useState(false)

  const activePage =
    location && location.href ? `/${location.href.split("/").slice(-1)}` : "/"

  return (
    <header className="header">
      <img src={logo} className="logo" alt="" onClick={() => navigate("/")} />
      <ul className="navigation">
        <li className={activePage === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={activePage === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={activePage === "/contact" ? "active" : ""}>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <div className="burgerMenuNavigation">
        <Burger open={isOpen} setOpen={setOpen} />
        <Menu open={isOpen} setOpen={setOpen} />
      </div>
    </header>
  )
}
