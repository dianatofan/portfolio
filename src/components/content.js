import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Card from "./card";

import "../styles/content.scss";
import "../styles/header/header.scss";

export default function Content() {
  const data = useStaticQuery(graphql`
    query {
      racefinder: file(relativePath: { eq: "thumbnail1.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      timeseries: file(relativePath: { eq: "thumbnail2.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      splitwise: file(relativePath: { eq: "splitwise.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
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
      <section className="past-work animate__animated animate__fadeIn animate__delay-1s">
        <div className="empty-space" />
        <h2>Past work</h2>
        <div className="projects-grid">
          <Card
            title="Optimizing the Racebooking Process"
            description="Mobile app that helps runners find their next race easier. Prototyped in Figma"
            role="UX/UI DESIGN | USER RESEARCH"
            image={data.racefinder.childImageSharp.fluid}
            url="racefinder"
          />
          <Card
            title="Visual Exploration of Time Series in Healthcare"
            description="Web application that generates charts based on input data. Built in React, Redux & D3.js"
            role="DATA VISUALIZATION | UX/UI DESIGN"
            image={data.timeseries.childImageSharp.fluid}
            url="time-series"
          />
          <Card
            title="Splitwise Redesign [in progress]"
            description="Identifying and solving user problems in the current app"
            role="UX/UI DESIGN | USER RESEARCH"
            image={data.splitwise.childImageSharp.fluid}
            url="splitwise"
            inProgress
          />
        </div>
      </section>
    </>
  );
}
