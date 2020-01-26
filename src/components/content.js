import React from "react";
import "../styles/header.scss";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Heart } from "react-feather";

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
       <h1 className="introText">
        Hi, I'm Diana, a front-end developer living in Copenhagen.
        <div>
          I <Heart className="heartIcon" /> UX design and data visualization.
        </div>
         <div>Currently working as a software engineer @Maersk</div>
         <div>Scroll to explore</div>
      </h1>
    </div>
  )
}
