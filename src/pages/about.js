import React from "react"
import Header from "../components/header"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../styles/about.scss"
import spark from "../../static/svg/spark.svg"

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "framedPicture.png" }) {
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
    }
  `)

  return (
    <main className="aboutMe">
      <Header location={location} />
      <div className="contentWrapper">
        <div className="content">
          <Img
          fluid={data.image.childImageSharp.fluid}
          style={{
            width: "50%"
          }}
          imgStyle={{ objectFit: "contain", width: "auto" }}
        />
        <section className="about-me-text">
          <div>
            Hi! I'm Diana Tofan, a Romanian front-end developer living in
            Copenhagen. I have a BSc degree in Computer Science and Master's in
            Digital Media Engineering.
          </div>
          <div>
            I have a passion for both programming and design and I'm always
            striving to combine both sides when working on a project. My most
            googled topics are about <b>UX design</b>,{" "}
            <b>human-computer interaction</b> and <b>data visualization</b>.
          </div>
          <span>
            Anything that is visual would spark my interest and make me eager to
            learn more <img className="spark-icon" src={spark} alt="" />
          </span>
          <div>
            When I'm not coding I'm probably reading tech articles on{" "}
            <a href="https://medium.com" target="_blank">
              Medium
            </a>{" "}
            or searching for inspiration on{" "}
            <a href="https://dribbble.com" target="_blank">
              Dribbble
            </a>{" "}
            / <a href="https://behance.com">Behance</a>. In my spare time I
            enjoy long runs, thought-provoking movies, laid-back gatherings or
            spontaneous travel.
          </div>
          <div>
            Drop me a line if you would like to connect:{" "}
            <a href="mailto:diana_tofan@ymail.com?Subject=Hello" target="_top">
              diana_tofan@ymail.com
            </a>
          </div>
        </section>
        </div>
      </div>
    </main>
  )
}
