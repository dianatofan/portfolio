import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/card.scss";

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
  <div className="rectangle time-series">
    <div className="title">
      Visual Exploration of Self-Tracking Data
    </div>
    <div className="description">
      Research project exploring the visualization of time-oriented data
    </div>
    <div className="button" onClick="redirect('timeSeries')">
      See more <i className="fas fa-arrow-right"/>
    </div>
    <div className="img">
      <Img fixed={data.imageOne.childImageSharp.fixed}/>
    </div>
  </div>
  )
}
