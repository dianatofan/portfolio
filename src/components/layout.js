import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

export default ({ location, children }) => (
  <main>
    <Header location={location} />
    <div className="contentWrapper">{children}</div>
    <Footer />
  </main>
)
