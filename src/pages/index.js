import "typeface-metropolis"
import React from "react"

import "animate.css"

import Content from "../components/content"
import Layout from "../components/layout"

import "../styles/index.scss"

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Content />
    </Layout>
  )
}