import React from "react"
import "../../styles/header/menu.scss"
import { Link, navigate } from "gatsby"
import "animate.css"

export const Menu = ({ open }) => (
  <nav className={open ? "open" : "hidden"}>
    <a>
      <Link className="animate__animated animate__fadeIn" to="/">
        Home
      </Link>
    </a>
    <a>
      <Link className="animate__animated animate__fadeIn" to="/about">
        About
      </Link>
    </a>
    <a>
      <Link className="animate__animated animate__fadeIn" to="/resume">
        Resume
      </Link>
    </a>
  </nav>
)
