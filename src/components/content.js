import React from "react"
import "../styles/header.scss"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { Heart } from "react-feather"
import "../styles/content.scss"
import Card from "./card"
import wavingHand from "../../static/svg/finger.svg"
import Graph from "./graph"
import mouse from "../../static/svg/mouse.svg"
import logo from "../images/logoNew.svg"

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
    <div className="contentWrapper">
      <div className="content">
        <h1 className="introText">
          <span>
            Hey!&nbsp;
            <img
              className="wavingHandIcon"
              src={wavingHand}
              width={36}
              height={36}
              alt=""
            />{" "}
          </span>
          I'm Diana, a web developer living in Copenhagen. I love creating
          purposeful, human-centric experiences and bringing them to life.
          <div className="subtitle">
            Frontend engineer at{" "}
            <a href="https://www.maersk.com/" target="_blank">
              Maersk
            </a>
          </div>
        </h1>
        <Graph />
      </div>
    </div>
  )
}
