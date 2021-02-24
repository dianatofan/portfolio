import React from "react"
import "../styles/header.scss"
import { useStaticQuery, graphql, navigate } from "gatsby"
import "../styles/content.scss"
import Card from "./card"
import Graph from "./graph"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "img.png" }) {
        childImageSharp {
          fixed(width: 550, height: 400, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="content">
      <h1 className="introText animate__animated animate__fadeInLeft">
        <span>Hey! 👋🏻</span>
        I'm Diana, a frontend developer based in Copenhagen. I love creating
        purposeful, human-centric experiences and bringing them to life.
        <div className="subtitle">
          Software engineer at{" "}
          <a href="https://www.maersk.com/" target="_blank">
            Maersk
          </a>
          &nbsp;👩🏻‍💻
        </div>
      </h1>
      <Graph />
    </div>
  )
}
