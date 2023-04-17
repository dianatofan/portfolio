import "../styles/about.scss";

import { graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import Layout from "../components/layout";
import Polaroid from "../components/polaroid";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function About({ location }) {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 520, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mountain: file(relativePath: { eq: "mountain.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      running: file(relativePath: { eq: "running.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sunset: file(relativePath: { eq: "sunset.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      art: file(relativePath: { eq: "art.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      race: file(relativePath: { eq: "halfmarathon.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      butterflies: file(relativePath: { eq: "museum.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      architecture: file(relativePath: { eq: "architecture.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <div className="about-me-page content animate__animated animate__fadeIn">
        {/* <StaticImage
          src="../images/me.JPG"
          alt="Picture with me"
          placeholder="blurred"
          layout="constrained"
          width={520}
          height={660}
          style={{ borderRadius: "16px" }}
        /> */}

        <Img
          fluid={data.image.childImageSharp.fluid}
          style={{ borderRadius: "16px" }}
        />

        <div className="about-me-text">
          <h1>
            Hi, I'm Diana, a passionate UX designer with background in frontend
            development.
          </h1>
          <p>
            With a foundation in frontend development, I've always had a keen
            interest in how users perceive and interact with web interfaces.
            This curiosity led me to transition from frontend development to UX
            design, where I've been able to combine my technical skills with my
            creativity to craft meaningful, user-centered solutions.
          </p>
          <p>
            Through my experience, I gained a deep understanding of how to build
            pixel-perfect, responsive applications, while being particularly
            drawn to the human side of technology.
          </p>
          <p>
            Currently, I work as a UX engineer at Google, where I build
            high-fidelity prototypes for travellers to validate concepts and
            explore ideas.
          </p>
          {/* <p>
            My career as a designer had a rocky start, as I found myself in a
            fullstack developer job I didn't enjoy. That motivated me to take
            action and work towards my biggest dream: become a designer. Ever
            since I've been working as a designer, my happiness level
            skyrocketed and seeing my ideas come to life is extremely fulfiling.
          </p>
          <p>
            I have been working in many different industries and
            cross-functional teams over time, making sure that wherever I was
            all the features I delivered were accessible, eye-pleasing and
            device agnostic. Nothing brings me greater joy than puting a smile
            on users' faces with design ideas that work.
          </p> */}
          <p>
            Send me a message if you would like to connect, I love meeting new
            people! 😄
            <br />
            <a
              href="mailto:dianatofan.dt@gmail.com?Subject=Hello"
              target="_top"
            >
              E-mail
            </a>
            {" / "}
            <a
              href="https://linkedin.com/in/diana-tofan"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
      <section className="instaPics animate__animated animate__fadeIn animate__delay-1s">
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
        <h2>Things that inspire me</h2>
        <div className="picsGrid">
          <Polaroid
            image={data.art.childImageSharp.fluid}
            caption="street art"
          />
          <Polaroid
            image={data.butterflies.childImageSharp.fluid}
            caption="museums"
          />
          <Polaroid
            image={data.architecture.childImageSharp.fluid}
            caption="architecture"
          />
        </div>
      </section>
      {/* <section> */}
      {/*  <h2>Bands I could listen to forever</h2> */}
      {/*  <Img fixed={data.pixies.childImageSharp.fixed} /> */}
      {/*  <Img fixed={data.strokes.childImageSharp.fixed} /> */}
      {/*  <Img fixed={data.killers.childImageSharp.fixed} /> */}
      {/*  <Img fixed={data.arcadeFire.childImageSharp.fixed} /> */}
      {/* </section> */}
      {/* <section> */}
      {/*  <h2>My    skills in a nutshell</h2> */}
      {/*  <div> */}
      {/*    <div>Frontend</div> */}
      {/*    <div>Design</div> */}
      {/*    <div>DataVis</div> */}
      {/*  </div> */}
      {/* </section> */}
      {/* <section> */}
      {/*  <h2>My personality type</h2> */}
      {/*  <div>Turbulent Entrepreneur (ESTP-T)</div> */}
      {/* </section> */}
    </Layout>
  );
}
