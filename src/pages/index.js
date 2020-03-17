import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import "../styles/index.scss";
import "typeface-metropolis";
import mouse from "../../static/svg/mouse.svg";

export default () => (
  <div className="main">
    <Header />
    <Content />
    <Footer />
    {/*<Link to="/about/">About</Link>*/}
  </div>
)
