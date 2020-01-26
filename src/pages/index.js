import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Content from "../components/content"
import "../styles/index.scss"
import "typeface-metropolis"

export default () => (
  <div className="main">
    <Header />
    <Content />
    <Link to="/about/">About</Link>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
  </div>
)
