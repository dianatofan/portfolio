import React from "react";
import "../styles/header.scss";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      {/*<Img fixed={data.imageOne.childImageSharp.fixed} />*/}
    </div>
  )
}
