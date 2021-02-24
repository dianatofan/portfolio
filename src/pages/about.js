import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../styles/about.scss"
import Polaroid from "../components/polaroid"
import Layout from "../components/layout"

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "group1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mountain: file(relativePath: { eq: "mountain.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      running: file(relativePath: { eq: "running.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sunset: file(relativePath: { eq: "sunset.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout location={location}>
      <div className="about-me-page content">
        <Img
          fluid={data.image.childImageSharp.fluid}
          style={{
            width: "80%",
          }}
          imgStyle={{ objectFit: "contain", width: "auto" }}
        />
        <section className="about-me-text">
          <h1>Hi again! I'm Diana Tofan.</h1>
          <p>
            I'm a frontend developer passionate about UX design. Having a degree
            in computer science, I understand how to build a software product
            from scratch and I'm familiar with the full-stack architecture.
          </p>
          <p>
            The reason why I chose to focus on frontend is simple - I just enjoy
            it better. I have always been more of a visual person, and for me
            it's extremely satisfying to see that my code produces a perceivable
            output. Constantly improving user interfaces is the thing I find
            most rewarding in the web development world.
          </p>
          <p>
            Besides frontend and design, another topics that I'm interested in
            are data visualization and human-computer interaction. I love
            telling stories with data and convey the information clearly to help
            users extract meaningful insights. I've also been fascinated by
            machine learning in the browser lately - and I always try to keep
            myself up to date with the recent breakthroughs in technology.
          </p>
          <p>
            Drop me a line if you would like to connect:{" "}
            <a href="mailto:diana_tofan@ymail.com?Subject=Hello" target="_top">
              diana_tofan@ymail.com
            </a>
          </p>
        </section>
      </div>
      <section className="instaPics">
        <h2>When I'm not in front of the computer, I...</h2>
        <div className="picsGrid">
          <Polaroid
            image={data.running.childImageSharp.fluid}
            caption="go for a run"
          />
          <Polaroid
            image={data.mountain.childImageSharp.fluid}
            caption="explore the world"
          />
          <Polaroid
            image={data.sunset.childImageSharp.fluid}
            caption="watch the sunset"
          />
        </div>
      </section>
    </Layout>
  )
}
