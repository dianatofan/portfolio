import React from "react"
import Content from "../components/content"
import "../styles/index.scss"
import "typeface-metropolis"
import Layout from "../components/layout"
import "animate.css"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Content />
    </Layout>
  )
}