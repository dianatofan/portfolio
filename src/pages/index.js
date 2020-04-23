import React from "react";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import Card from "../components/card";
import "../styles/index.scss";
import "typeface-metropolis";
import { ParallaxProvider } from 'react-scroll-parallax';

export default ({ location }) => (
  <ParallaxProvider>
    <div className="main">
      <Header location={location} />
      <Content />
      <Footer />
    </div>
    <Card />
  </ParallaxProvider>
)
