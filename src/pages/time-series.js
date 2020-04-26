import React from "react";
import Header from "../components/header";
import { graphql, navigate, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "../styles/about.scss";
import spark from "../../static/svg/spark.svg";
import timeSeriesHeader from "../images/timeSeriesHeaderCrop.png";

export default ({ location }) => {
  const data = useStaticQuery(graphql`
  query {
    imageOne: file(relativePath: { eq: "timeSeriesHeaderCrop.png" }) {
      childImageSharp {
         fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  return (
    <div>
      <Header location={location} />
      <div className="full-screen-header">
        <img src={timeSeriesHeader} alt="" style={{ maxHeight: "60vh", width: "100%", display: "inline-block" }} />
        {/*<Img fluid={data.imageOne.childImageSharp.fluid} style={{ maxHeight: "60vh", width: "100%", display: "inline-block" }} />*/}
      </div>
      <section className="title-section">
        <h1>Visual Exploration of Time Series in Healthcare</h1>
        <div className="basic-info">
          <div>
            <div className="headline">Duration</div>
            <div>6 months</div>
          </div>
          <div>
            <div className="headline">Type</div>
            <div>Personal project</div>
          </div>
          <div>
            <div className="headline">Libraries used</div>
            <div>React, Redux, D3.js</div>
          </div>
          <div>
            <div className="headline">Role</div>
            <div>Software developer | UX researcher</div>
          </div>
        </div>
      </section>
      <section className="problem">
        <h1>Overview</h1>
        <div>
          <div>
            <h2>Problem</h2>
            <div>
              Sharing self-tracked data with others to seek treatment or solutions to a problem
              led to an ever growing number of healthcare professionals who must rely on time-dependent visualizations to help their patients. Although they may be knowledgeable in their field,
              not all of them are computer experts, hence they need an easy-to-use tool in order to
              analyze and extract relevant information from the data under investigation.
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2>Solution</h2>
            <div>
              This project aims to deliver a web application capable of generating time series visualizations rich in information and easy to interact with. By using quantified-self data
              collected from real subjects, the goal of the project is to help newcomers discover
              meaningful patterns in their datasets, with minimum effort and maximum results.
            </div>
        </div>
        </div>
      </section>
      <section className="quote-section">
        <blockquote>
          <div className="quote-mark" style={{ textAlign: "left"}}>“</div>
          <div className="quote">How to extract meaningful patterns from temporal data
            with minimum effort and maximum results?</div>
          <div className="quote-mark" style={{ textAlign: "right"}}>”</div>
        </blockquote>

      </section>
    </div>
  )
}
