import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/card.scss";

export default () => {
  const data = useStaticQuery(graphql`
  query {
    imageOne: file(relativePath: { eq: "timeSeries.png" }) {
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
    <div className="left-column">
      <div className="title">
        Visual Exploration of Time Series in Healthcare
        {/*Visual Exploration of Self-Tracking Data*/}
      </div>
      <div className="description">
        Web application that generates charts based on input data
        Built in React, Redux & D3.js
      </div>
      <div className="role">
        UX RESEARCHER | UX DESIGNER | SOFTWARE DEVELOPER
      </div>
      <div className="button" onClick="redirect('timeSeries')">
        See more <i className="fas fa-arrow-right"/>
      </div>
    </div>
    <div className="right-column image">
      <Img fixed={data.imageOne.childImageSharp.fixed}/>
    </div>
  </div>
  )
}
