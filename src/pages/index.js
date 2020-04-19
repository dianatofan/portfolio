import React from "react";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import "../styles/index.scss";
import "typeface-metropolis";

export default ({ location }) => (
  <div className="main">
    <Header location={location} />
    <Content />
    <Footer />
  </div>
)
