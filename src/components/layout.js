import React from "react"
import Header from "./header";
import "../styles/index.scss"

export default ({ location, children }) =>
  (
    <main>
      <Header location={location} />
      <div className="contentWrapper">
        { children }
      </div>
    </main>
  )


