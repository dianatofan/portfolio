import React from "react";
import "../styles/header.scss";
import { useStaticQuery, graphql } from "gatsby"
import { Heart } from "react-feather";
import "../styles/content.scss";
import Card from "./card";
import mouse from "../../static/svg/mouse.svg";

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
`);

  return (
    <div className="content">
       <h1 className="introText">
         Hey! I'm Diana, a front-end engineer at <a href="https://www.maersk.com" target="_blank">Maersk</a> Copenhagen.
         I love creating purposeful, human-centric experiences and bringing them to life.
         <div className="subtitle">Former student developer at <a href="https://www.triggerz.com/" target="_blank">Triggerz</a></div>
      </h1>
      {/*<Card />*/}
    </div>
  )
}
