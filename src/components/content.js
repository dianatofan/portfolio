import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Card from "./card";

import "../styles/content.scss";
import "../styles/header/header.scss";

export default function Content() {
  const data = useStaticQuery(graphql`
    query {
      racefinder: file(relativePath: { eq: "card.png" }) {
        childImageSharp {
          fixed(width: 500, height: 500, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      timeseries: file(relativePath: { eq: "timeSeriesIpad.png" }) {
        childImageSharp {
          fixed(width: 500, height: 500, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="content front-page">
        <div className="introText animate__animated animate__fadeIn">
          <h2>Hey! I'm Diana, a frontend developer UX'er at heart.</h2>
          <h3>I love brainstorming ideas and bringing them to life.</h3>
        </div>
      </div>
      <div className="scroll-to-explore">
        EXPLORE
        <div className="icon-scroll" />
      </div>
      {/* <h2 className="banner">COMING SOON</h2> */}
      <div className="projects-grid">
        <Card image={data.racefinder.childImageSharp.fixed} />
        <Card image={data.timeseries.childImageSharp.fixed} />
      </div>
    </>
  );
}
