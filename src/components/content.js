import React from "react"
import "../styles/header.scss"
import { useStaticQuery, graphql } from "gatsby"
import { Heart } from "react-feather"
import "../styles/content.scss"
import Card from "./card"
import wavingHand from "../../static/svg/finger.svg"
import Graph from "./graph"
import mouse from "../../static/svg/mouse.svg"

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
      <h1 className="introText">
        <span>
          Hey!
          <img src={wavingHand} width={36} height={36} alt="" />{" "}
        </span>
        <br />
        I'm Diana, a frontend engineer at{" "}
        <a href="https://www.maersk.com" target="_blank">
          Maersk
        </a>{" "}
        Copenhagen. I love creating purposeful, human-centric experiences and
        bringing them to life.
        <div className="subtitle">
          Former student developer at{" "}
          <a href="https://www.triggerz.com/" target="_blank">
            Triggerz
          </a>
        </div>
      </h1>
      <Graph />
    </div>
  )
}
