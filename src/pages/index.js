import React from "react"
import Header from "../components/header/header"
import Content from "../components/content"
import Footer from "../components/footer"
import Card from "../components/card"
import "../styles/index.scss"
import "typeface-metropolis"
import Layout from "../components/layout"
import { ParallaxProvider } from "react-scroll-parallax"
import "animate.css"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Content />
    </Layout>
  )
}

// <ParallaxProvider>
//     <div className="main">
//       <Header location={location} />
//       <Footer />
//     </div>
//     {/*<Card />*/}
//   </ParallaxProvider>
