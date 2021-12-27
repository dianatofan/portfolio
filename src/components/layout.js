import React from "react"
import Header from "./header/header"
import Footer from "./footer"
import "../styles/index.scss"

export default ({ location, children }) => (
  <main>
    <Header location={location} />
    <div className="contentWrapper">
      {children}
      <Footer />
    </div>
  </main>
)
