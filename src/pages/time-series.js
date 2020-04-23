import React from "react";
import Header from "../components/header";
import { graphql, navigate, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "../styles/about.scss";
import spark from "../../static/svg/spark.svg";

export default ({ location }) => {
  const data = useStaticQuery(graphql`
  query {
    imageOne: file(relativePath: { eq: "timeSeriesHeader.png" }) {
      childImageSharp {
         fluid(quality: 100) {
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
        <Img fluid={data.imageOne.childImageSharp.fluid} style={{ maxHeight: "60vh", width: "100%", display: "inline-block" }} />
      </div>
    </div>
  )
}
