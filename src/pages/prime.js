import React from "react";
import Snakke from "react-snakke";
import Carousel from "nuka-carousel";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Header from "../components/header/header";
import Footer from "../components/footer";
import ScrollToTopButton from "../components/scroll-to-top-button";

import "../styles/project.scss";

import runnerType1 from "../images/racefinder/runnerType1.png";
import runnerType2 from "../images/racefinder/runnerType2.png";
import runnerType3 from "../images/racefinder/runnerType3.png";
import runnerType4 from "../images/racefinder/runnerType4.png";

import persona1 from "../images/racefinder/persona1.png";
import persona2 from "../images/racefinder/persona2.png";

import primeGif from "../images/prime/primeGif1.gif";

export default function Racefinder({ location }) {
  const data = useStaticQuery(graphql`
    query {
      designProcess: file(
        relativePath: { eq: "sustainability/design process.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      theGood: file(relativePath: { eq: "prime/theGood.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      theBad: file(relativePath: { eq: "prime/theBad.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      theUgly: file(relativePath: { eq: "prime/theUgly.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      primeIa: file(relativePath: { eq: "prime/primeVideoIA.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      header: file(relativePath: { eq: "racefinder/coverblue.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      survey: file(relativePath: { eq: "racefinder/research.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      wireframe1: file(relativePath: { eq: "racefinder/wireframes1.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      wireframe2: file(relativePath: { eq: "racefinder/wireframes2.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      midFidelity: file(
        relativePath: { eq: "racefinder/midFidelityRounded.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      signUpFlow: file(relativePath: { eq: "racefinder/signUpFlow.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      onboarding: file(relativePath: { eq: "racefinder/onboarding.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      profileAndHistory: file(
        relativePath: { eq: "racefinder/profileAndHistory.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      map: file(relativePath: { eq: "racefinder/map.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      usabilityTest: file(
        relativePath: { eq: "racefinder/usabilityTest.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      refinements: file(relativePath: { eq: "racefinder/refinements.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  const colors = {
    light: "#0075db",
    medium: "#2c3344",
    dark: "#111318",
  };
  return (
    <div
      className="project animate__animated animate__fadeIn dark-mode"
      style={{ background: colors.medium, color: "#fff" }}
    >
      <Snakke color={colors.light} top="0" height="4px" zIndex="10" />
      <ScrollToTopButton />
      <Header location={location} />
      <Img fluid={data.header.childImageSharp.fluid} />
      <section className="title-section">
        <div>
          <h1 style={{ marginBottom: "10px" }}>Amazon Prime Video Redesign</h1>
          <h3 style={{ margin: 0, color: "#b9c4ff", opacity: 1 }}>
            Enhancing the UX of a video streaming app
          </h3>
        </div>
        <div className="basic-info max-length">
          <div className="duration">
            <div className="headline">Duration</div>
            <div>6 months</div>
          </div>
          <div className="type">
            <div className="headline">Type</div>
            <div>Self-initiated project</div>
          </div>
          <div className="role">
            <div className="headline">Role</div>
            <div>UX/UI designer</div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: colors.dark }}>
        <h1 id="overview">Overview</h1>
        <div>
          <div>
            <h3 className="subtitle">Problem</h3>
            <h1 className="statement">
              Amazon Prime Video is considered the "worst streaming service" of
              them all.
            </h1>
            <div className="max-length">
              Amazon Prime Video is the streaming-video component of Amazon
              Prime, offering a vast catalogue of TV shows and movies to watch
              from the comfort of your home for a monthly fee of $12.99. Even
              thought it's a paid service, Amazon Prime Video has been named
              countless times the worst streaming platform in the history of
              internet by people on social media, due to its poor UI, buried
              functionalities and difficulty of navigation. It is a video
              platform with a wide range of movies that has a lot of potential
              if only the usability problems would be addressed.
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h3 className="subtitle">Goal</h3>
            <h1 className="statement">
              Decrease users' frustration when using the Amazon Prime Video app.
            </h1>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: colors.medium }}>
        <h1 id="overview">Analysis</h1>
        <div className="side-columns">
          <h2 style={{ marginBottom: "40px" }}>Mobile app overview</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <img
              src={primeGif}
              style={{ margin: "0 auto", borderRadius: "20px" }}
              alt="Amazon Prime Video app overview"
            />
            <p>
              Having a quick glance at the current app on iOS, we can already
              identify a few usability problems such as:
              <ul>
                <li>Absurd amount of films and shows strangely hidden</li>
                <li>TV shows broken into seasons</li>
                <li>Poor search functionality</li>
                <li>Confusing UI</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <section className="wireframes">
        <div className="full-screen-text">
          <h2 style={{ marginTop: "100px" }}>What do the users say?</h2>
          <p style={{ marginBottom: "60px" }}>
            I collected insights from 3 social media platforms: Reddit, Google
            Play and App Store, where people expressed their honest opinions
            regarding Amazon Prime Video. The app generated a lot of frustration
            among users, but it also presented a few advantages over its
            competitors many were not even aware of - features that should be
            put in the spotlight when redesigning the UI.
          </p>
        </div>
        <div className="mid-fidelity" style={{ background: colors.dark }}>
          <h1 style={{ marginBottom: "40px" }}>The Good</h1>
          <Img
            fluid={data.theGood.childImageSharp.fluid}
            style={{ margin: "0 auto" }}
          />
        </div>
        <div className="high-fidelity" style={{ background: colors.dark }}>
          <h1 style={{ margin: 0 }}>The Bad</h1>
          <Img
            fluid={data.theBad.childImageSharp.fluid}
            style={{ margin: "0 auto" }}
          />
        </div>
        <div className="high-fidelity" style={{ background: colors.dark }}>
          <h1 style={{ margin: 0 }}>...and The Ugly</h1>
          <Img
            fluid={data.theUgly.childImageSharp.fluid}
            style={{ margin: "0 auto" }}
          />
        </div>
      </section>
      <section className="section" style={{ background: colors.medium }}>
        <h1>Findings</h1>
        <div>
          <h2>Key mentions</h2>
          <div className="max-length">
            According to the users, the app excels at 3 main features, while
            being notoriously bad at the rest.
            <p>Most appreciated elements:</p>
            <ul>
              <li>
                <b>X-ray function</b>, that allows users to see the actor names
                & soundtracks during a scene
              </li>
              <li>
                <b>IMDb integration</b>, displaying the IMDb rating for each
                title in the catalogue
              </li>
              <li>
                <b>High variety of content</b> - Amazon Prime Video has a much
                larger library of movies and TV shows compared to Netflix or
                Hulu (more than 24,000 movies and 2,100 shows)
              </li>
            </ul>
            <p>Things that scream for improvement:</p>
            <ul>
              <li>
                The <b>search functionality</b> where TV shows are separated by
                seasons
              </li>
              <li>
                <b>Clunky navigation</b> that buries the main functionalities
                under a thick layer of UI screens
              </li>
              <li>
                <b>Disorganized content</b> making the process of finding
                something to watch unnecessarily difficult
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: colors.dark }}>
        <h1>Define</h1>
        <div>
          <h2>What are Prime Video's key features?</h2>
          <div className="max-length">
            To start with a recap, let's review where Amazon Prime Video shines
            at. According to its website, its primary goals are the following:
            <ul>
              <li>
                offer a huge selection of TV series and movies customers won't
                find anywhere else
              </li>
              <li>allow users to stream from any device</li>
              <li>
                go behind the scenes using X-ray to explore cast information
              </li>
            </ul>{" "}
            <h2 style={{ marginTop: "40px" }}>Dissecting the app</h2>
            <p>
              The thing that was mostly criticized in Prime Video was related to
              the poor video organization and users' inability to find anything
              to watch due to unintuitive navigation and hierarchy. Because of
              that, I visualized the current Information Architecture (IA) and
              marked the duplicated sections in blue.
            </p>
            <h2 style={{ marginTop: "60px", marginBottom: "40px" }}>
              Amazon Prime Video Information Architecture
            </h2>
            <Img
              fluid={data.primeIa.childImageSharp.fluid}
              style={{ margin: "0 auto" }}
            />
          </div>
        </div>
      </section>
      <div
        className="mid-fidelity"
        style={{ background: "#f0f0f0", padding: "4rem 6vw" }}
      >
        <h1 style={{ marginBottom: "40px" }}>Revision</h1>
        <Img
          fluid={data.refinements.childImageSharp.fluid}
          style={{ margin: "0 auto" }}
        />
      </div>
      <section className="section" style={{ background: "white" }}>
        <h1>Reflection</h1>
        <div>
          This project has been a great opportunity for me to expand my
          strategic thinking. On the whole, the app met its purpose and could be
          a significant tool to runners looking for upcoming races. My key
          learning during the design process was how important it is to ask for
          user feedback before everything else comes into play.
          <br />
          <br />
          There are a lot of improvements to be added in future iterations such
          as:
          <ul>
            <li>adding a user's settings page</li>
            <li>integrating notifications</li>
            <li>improving the search filters</li>
            <li>using AI to send personalized recommandations to users</li>
          </ul>
        </div>
      </section>
      <div className="iframe-container">
        <iframe
          style={{
            border: "none",
            background: "#fff",
          }}
          width="1400"
          height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Flu0VBSCpiFcH1fJCLtOk5l%2FUntitled%3Fnode-id%3D241%253A5949%26scaling%3Dscale-down%26page-id%3D241%253A380%26starting-point-node-id%3D241%253A5949%26hide-ui%3D1"
          allowfullscreen
          allowtransparency
          frameBorder={0}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
