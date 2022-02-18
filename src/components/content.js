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
      sustainability: file(relativePath: { eq: "thumbnail3.png" }) {
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
          <h2>Hey! I'm Diana, a digital designer UX'er at heart.</h2>
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
            title="Racefinder App"
            description="Optimizing the racebooking process to help runners find their next race easier"
            role="UX/UI DESIGN | USER RESEARCH"
            image={data.racefinder.childImageSharp.fluid}
            url="racefinder"
          />
          <Card
            title="Sustainable E-Commerce"
            description="Reimagining the checkout flow to reduce packaging waste in online orders"
            role="UX/UI DESIGN | USER RESEARCH"
            image={data.sustainability.childImageSharp.fluid}
            url="sustainability"
          />
          <Card
            title="Visual Exploration of Time Series in Healthcare"
            description="Web application that generates medical charts based on input data. Built in D3.js"
            role="DATA VISUALIZATION | UX/UI DESIGN"
            image={data.timeseries.childImageSharp.fluid}
            url="time-series"
          />
        </div>
      </section>
    </>
  );
}
