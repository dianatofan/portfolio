import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "../styles/about.scss";
import Polaroid from "../components/polaroid";
import Layout from "../components/layout";

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "portraitNew.png" }) {
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
      pixies: file(relativePath: { eq: "pixies.png" }) {
        childImageSharp {
          fixed(width: 200, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      strokes: file(relativePath: { eq: "strokes.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      killers: file(relativePath: { eq: "killers.png" }) {
        childImageSharp {
          fixed(width: 260, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cure: file(relativePath: { eq: "cure.png" }) {
        childImageSharp {
          fixed(width: 200, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      arcadeFire: file(relativePath: { eq: "arcadeFire.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

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
            I'm a frontend developer with 5 years of experience passionate about
            UX design. Having a degree in computer science, I understand how to
            build a software product from scratch and I'm familiar with the
            full-stack architecture.
          </p>
          <p>
            The reason why I chose to focus on frontend is simple - I just enjoy
            it better. I have always considered myself a visual thinker and for
            me it's extremely satisfying to see that my code produces a
            perceivable output. Constantly improving user interfaces is the
            thing I find most rewarding in the web development world.
          </p>
          <p>
            Besides frontend and design, another topics that I'm interested in
            are human-computer interaction and data visualization. I love
            playing with D3 in my spare time and I always find interesting
            datasets to explore. When it comes to writing code, I'm a firm
            believer in less is more and I always try to keep myself up to date
            with the recent breakthroughs in technology.
          </p>
          <p>
            Drop me a line if you would like to connect:{" "}
            <a
              href="mailto:dianatofan.dt@gmail.com?Subject=Hello"
              target="_top"
            >
              dianatofan.dt@gmail.com
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
      {/*<section>*/}
      {/*  <h2>Bands I could listen to forever</h2>*/}
      {/*  <Img fixed={data.pixies.childImageSharp.fixed} />*/}
      {/*  <Img fixed={data.strokes.childImageSharp.fixed} />*/}
      {/*  <Img fixed={data.killers.childImageSharp.fixed} />*/}
      {/*  <Img fixed={data.arcadeFire.childImageSharp.fixed} />*/}
      {/*</section>*/}
      {/*<section>*/}
      {/*  <h2>My skills in a nutshell</h2>*/}
      {/*  <div>*/}
      {/*    <div>Frontend</div>*/}
      {/*    <div>Design</div>*/}
      {/*    <div>DataVis</div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      {/*<section>*/}
      {/*  <h2>My personality type</h2>*/}
      {/*  <div>Turbulent Entrepreneur (ESTP-T)</div>*/}
      {/*</section>*/}
    </Layout>
  );
};
