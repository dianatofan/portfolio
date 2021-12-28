import React from "react";

import Footer from "./footer"
import Header from "./header/header"

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
