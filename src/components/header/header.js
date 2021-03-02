import React, { useState } from "react"
import "../../styles/header/header.scss"
import { Menu as MenuIcon, X } from "react-feather"
import { Link, navigate } from "gatsby"
import logo from "../../images/logos/logo.svg"
import { Burger } from "./hamburger"
import { Menu } from "./menu"

export default ({ location }) => {
  const [isOpen, setOpen] = useState(false)

  const activePage =
    location && location.href ? `/${location.href.split("/").slice(-1)}` : "/"

  return (
    <header className="header sticky" id="header">
      <div>
        <img
          src={logo}
          className={`logo ${isOpen ? "white" : ""}`}
          alt=""
          onClick={() => navigate("/")}
        />
        <ul className="navigation">
          <li className={activePage === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={activePage === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={activePage === "/resume" ? "active" : ""}>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
        <div className="burgerMenuNavigation">
          <Burger open={isOpen} setOpen={setOpen} />
          <Menu open={isOpen} setOpen={setOpen} />
        </div>
      </div>
    </header>
  )
}
