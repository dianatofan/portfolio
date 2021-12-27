import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Img from "gatsby-image";
import "../styles/card.scss";

export const query = graphql`
  {
    file(relativePath: { eq: "timeSeriesIpad.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }`;

export default ({ data }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     imageOne: file(relativePath: { eq: "timeSeriesIpad.png" }) {
  //       childImageSharp {
  //         fixed(width: 600, height: 450, quality: 100) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <div className="rectangle time-series">
      <div className="top image" onClick={() => navigate("/racefinder")}>
         <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
        {/* <Img fixed={data.imageOne.childImageSharp.fixed} /> */}
      </div>
      <div className="bottom">
        <div className="title">
          Visual Exploration of Time Series in Healthcare
        </div>
        <div className="description">
          Web application that generates charts based on input data Built in
          React, Redux & D3.js
        </div>
        <div className="role">
          DATA VISUALIZATION | UX DESIGN
        </div>
      </div>
    </div>
  );
};
