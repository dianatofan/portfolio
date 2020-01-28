import React from "react";
import "../styles/header.scss";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Heart } from "react-feather";
import "../styles/content.scss";

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
        Hi, I'm Diana, a front-end engineer working at Maersk, Copenhagen.
        <div>
          I <Heart className="heartIcon" /> creating beautiful designs and bringing them to life.
        </div>
         <div className="subtitle">Scroll to explore</div>
      </h1>
    </div>
  )
}
