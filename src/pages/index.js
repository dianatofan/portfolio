import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import "../styles/index.scss"
import "typeface-metropolis"
import "typeface-abril-fatface"

export default () => (
  <div>
    <Header />
    <Link to="/about/">About</Link>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
  </div>
)
