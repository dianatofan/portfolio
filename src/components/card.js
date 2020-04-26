import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import Img from "gatsby-image";
import "../styles/card.scss";

export default () => {
  const data = useStaticQuery(graphql`
  query {
    imageOne: file(relativePath: { eq: "timeSeriesIpad.png" }) {
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
        Data visualization tool that facilitates the doctor-patient communication for improving the patient's wellbeing.
        Built in React, Redux & D3.js
      </div>
      <div className="role">
        SOFTWARE DEVELOPER | UX RESEARCHER
      </div>
    </div>
    <div className="right-column image"  onClick={() => navigate("/time-series")} >
      <Img fixed={data.imageOne.childImageSharp.fixed} />
    </div>
  </div>
  )
}
