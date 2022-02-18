import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import Layout from "../components/layout";
import Polaroid from "../components/polaroid";

import "../styles/about.scss";

export default function About({ location }) {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "aboutmepic.png" }) {
        childImageSharp {
          fixed(width: 550, height: 620, quality: 100) {
            ...GatsbyImageSharpFixed
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
      sunset: file(relativePath: { eq: "cph.jpeg" }) {
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
      butterflies: file(relativePath: { eq: "butterflies.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      architecture: file(relativePath: { eq: "architecture.jpg" }) {
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
        <StaticImage
          src="../images/aboutmepic.png"
          alt="Picture with me"
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={660}
        />
        <section className="about-me-text">
          <h1>Hi again! I'm Diana Tofan.</h1>
          <p>
            I'm a UX/UI designer based in Copenhagen who started her journey as a frontend developer.
            I have been building websites for a few years and have
            always been excited about making pixel-perfect apps, however I realized
            my true love is design, so I took the leap and decided to pursue my greatest passion.
          </p>
          <p>
            In my job as a developer, I have always paid great attention to details
            and made sure all the apps I built were accessible, eye-pleasing and
            device agnostic. I am seeking to leverage this experience in the design world to create 
            smooth user flows that abide to industry standards and are feasible to implement from an engineering standpoint.
          </p>
          <p>Nothing makes me happier than puting a smile on
            users' faces with design ideas that work.</p>
          <p>
            Send me a message if you would like to connect 😄
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
        </section>
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
