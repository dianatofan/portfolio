import "../styles/project.scss";
import "../../node_modules/image-compare-viewer/dist/image-compare-viewer.min.css";

import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Footer from "../components/footer";
import Header from "../components/header/header";
import ImageCompare from "image-compare-viewer";
import Img from "gatsby-image";
import ReactCompareImage from "react-compare-image";
import ScrollToTopButton from "../components/scroll-to-top-button";
import Snakke from "react-snakke";
import after1 from "../images/famly/after1.png";
import after2 from "../images/famly/after2.png";
import before1 from "../images/famly/before1.png";
import before2 from "../images/famly/before2.png";

export default function Racefinder({ location }) {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "famly/cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      doubleDiamond: file(relativePath: { eq: "famly/doubleDiamond.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      phase1: file(relativePath: { eq: "famly/phase1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      styleguide1: file(relativePath: { eq: "famly/styleguide1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      styleguide2: file(relativePath: { eq: "famly/styleguide2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      styleguide3: file(relativePath: { eq: "famly/styleguide3.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      components1: file(relativePath: { eq: "famly/components1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      components2: file(relativePath: { eq: "famly/components2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      ui: file(relativePath: { eq: "famly/ui.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  const colors = {
    light: "#fcfaff",
    medium: "#9747FF",
    dark: "#412574",
  };

  useEffect(() => {
    const viewers = document.querySelectorAll(".image-compare");

    viewers.forEach((element) => {
      let view = new ImageCompare(element).mount();
    });
  }, []);

  return (
    <div className="project animate__animated animate__fadeIn">
      <Snakke color={colors.medium} top="0" height="4px" zIndex="10" />
      <ScrollToTopButton />
      <Header location={location} />
      <Img fluid={data.header.childImageSharp.fluid} className="cover-image" />
      <section className="title-section">
        <div>
          <h1 style={{ marginBottom: "10px" }}>Famly's Redesign</h1>
          <h3 style={{ margin: 0, color: colors.dark, opacity: 0.5 }}>
            Shaping a design system for an already existing product
          </h3>
        </div>
        <div className="basic-info">
          <div className="duration">
            <div className="headline">Duration</div>
            <div>Ongoing</div>
          </div>
          <div className="type">
            <div className="headline">Type</div>
            <div>Work project</div>
          </div>
          <div className="role">
            <div className="headline">Role</div>
            <div>UX/UI designer</div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: colors.light }}>
        <h1 id="overview">Overview</h1>
        <div>
          <div>
            <h3 className="subtitle">Background</h3>
            <div className="max-length">
              Famly is a child-care platform used in nurseries to facilitate the
              communication between educators and parents while managing
              internal operations (such as scheduling, attendance, and billing).
              It came into being in 2013, when two engineers started their own
              company as a solution to their common frustration of dealing with
              too much paperwork when sending their children to daycare. Being
              an early-stage startup with unknown success probability, hiring a
              design team was not at the top of the list in the beginning.
              However, as the company expanded, the UI became inconsistent and
              difficult to maintain leading to a poor user experience.
            </div>
            <br />
            <div className="max-length">
              I joined Famly 8 years since its foundation as a UX/UI designer,
              where I leveraged my frontend knowledge to help build a Design
              System from scratch.
            </div>
          </div>
          <div style={{ marginTop: "50px", maxWidth: "75ch" }}>
            <h3 className="subtitle">Problem</h3>
            <h1 className="statement max-length">
              Lack of a design system led to UI inconsistencies, difficult
              maintenance and poor communication between designers and
              developers.
            </h1>
          </div>
          <div style={{ marginTop: "50px", maxWidth: "75ch" }}>
            <h3 className="subtitle">Goal</h3>
            <h1 className="statement max-length">
              Create a unified and easily maintanable source of truth for
              designers and developers.
            </h1>
          </div>
        </div>
      </section>
      <section className="quote-section" style={{ background: colors.dark }}>
        <blockquote>
          <div className="quote-mark" style={{ textAlign: "left" }}>
            “
          </div>
          <div className="quote max-length">
            How can ensure consistency across the platform?
          </div>
          <div className="quote-mark" style={{ textAlign: "right" }}>
            ”
          </div>
        </blockquote>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1 id="research">Process</h1>
        <div>
          <h2></h2>
          <div className="max-length">
            We have chosen the Double Diamond approach to guide the process.
          </div>
          <div className="max-length" style={{ marginTop: "20px" }}>
            The Double Diamond is a design framework that consists of four
            phases: Discover, Define, Develop and Deliver. These phases are
            organized into two diamonds representing problem and solution
            spaces. The first diamond focuses on understanding the problem,
            while the second focuses on creating the solution.
          </div>
        </div>
      </section>
      <Img
        fluid={data.doubleDiamond.childImageSharp.fluid}
        style={{
          margin: "0 auto",
          maxWidth: "1400px",
          maxHeight: "700px",
        }}
      />
      <section className="section" style={{ background: "white" }}>
        <h1 id="research">Phase 1: Discover</h1>
        <div>
          <div className="max-length">
            To better understand the different problems in our product, we
            started by evaluating the current UI inventory to uncover
            inconsistencies, pain points and opportunities for improvement.
            Shortly after extracting the components, we realized many of them
            had different implementation across the platform even though they
            served the same purpose. Besides, the product had many{" "}
            <b>design inconsistencies</b>, be it in colors, typography,
            components, guidelines, leading to a poor experience and weak brand
            image.
            <br />
            <br />
            To prioritise what focus areas to tackle first, we conducted user
            research with the frontend developers and product managers in the
            company. We found out that the lack of a unified design language led
            to inefficiencies in the development process and negatively impacted
            the user experience. We also discovered that designers and
            developers often struggled to collaborate effectively due to the
            absence of a shared design vocabulary.
          </div>
        </div>
      </section>
      <Img
        fluid={data.phase1.childImageSharp.fluid}
        style={{
          margin: "0 auto",
          maxWidth: "1400px",
          maxHeight: "700px",
        }}
      />
      <section className="section" style={{ background: colors.light }}>
        <h1 id="research">Phase 2: Define</h1>
        <div>
          <h2>
            After synthetizing the research, we defined the problem statement:
          </h2>
          <div className="max-length">
            <h1 className="statement">
              We need a design system to standardize UI and UX components,
              streamline the development process and improve the overall user
              experience of our platform.
            </h1>
            <br />
            We established clear goals and objectives for the design system:
            <ul style={{ listStyleType: "decimal" }}>
              <li>
                <b>Single source of truth:</b> Create a unified and easily
                maintanable source of truth for designers and developers
              </li>
              <li>
                <b>Clarity:</b> Improve collaboration between designers and
                developers
              </li>
              <li>
                <b>Efficiency:</b> Increase development efficiency and reduce
                time required to create new features
              </li>
              <li>
                <b>Consistency:</b> Enhance the user experience by ensuring
                consistency across the platform
              </li>
              <li>
                <b>Scalability:</b> Design for future growth and adaptation
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1 id="research">Phase 3: Develop</h1>
        <div className="max-length">
          After brainstorming potential solutions and exploring various design
          system tools and frameworks, we decided that designers would use Figma
          for creating the components and developers would rely on React,
          Material Design and Storybook for implementation and documentation.
          <div className="max-length">
            <br />
            Before moving on to creating components, we started with design
            tokens to establish the "core styles". We defined a new, refreshing
            color palette, introduced shadows, recreated icons and updated our
            typeface to match the brand identity.
          </div>
        </div>
      </section>
      <Img
        fluid={data.styleguide1.childImageSharp.fluid}
        style={{
          margin: "0 auto",
          maxWidth: "1400px",
          maxHeight: "800px",
        }}
      />
      <Img
        fluid={data.styleguide2.childImageSharp.fluid}
        style={{
          margin: "0 auto",
          maxWidth: "1400px",
          maxHeight: "800px",
        }}
      />
      <Img
        fluid={data.styleguide3.childImageSharp.fluid}
        style={{
          margin: "0 auto",
          maxWidth: "1400px",
          maxHeight: "800px",
        }}
      />
      <Img
        fluid={data.components1.childImageSharp.fluid}
        style={{
          margin: "0 auto",
          maxWidth: "1400px",
          maxHeight: "1000px",
        }}
      />
      <Img
        fluid={data.components2.childImageSharp.fluid}
        style={{
          margin: "0 auto",
          maxWidth: "1400px",
          maxHeight: "1000px",
        }}
      />
      <section className="section" style={{ background: "white" }}>
        <h1 id="research">Phase 4: Deliver</h1>
        <div className="max-length">
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Implementation
          </h2>
          We worked closely with developers to implement the design system in
          the web app, replacing existing components with the new standardized
          ones.
          <br />
          <br />
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Training and Documentation
          </h2>
          Everytime a new component would be created or new updates were added
          to the design system, we made sure everyone heard about it by
          presenting it in the weekly company-wide meeting. For each component,
          we created a comprehensive documentation with usage guidelines,
          variants and accessbility considerations. In addition, each time a
          component was redesigned, an e-mail newsletter would be sent across
          the company to spread the word.
          <br />
          <br />
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Measurements and Iteration
          </h2>
          To measure the effectiveness of the design system we started
          monitoring key performance indicators (KPIs) such as development time
          and user satisfaction. We also set up a feedback loop to gather input
          from uses and stakeholders to make continuous improvements to the
          design system.
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1 id="research">Before/After</h1>{" "}
      </section>
      <div className="image-compare-container">
        <div className="pure-g">
          <div
            id="image-compare"
            className="image-compare pure-u-1 pure-u-md-1-2 pure-u-lg-1-2"
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <img src={before1} alt="" />
            <img src={after1} alt="" />
          </div>
          <div
            id="image-compare"
            className="image-compare pure-u-1 pure-u-md-1 pure-u-lg-1-2"
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <img src={before2} alt="" />
            <img src={after2} alt="" />
          </div>
        </div>
      </div>

      <section className="section" style={{ background: "white" }}>
        <h1 id="research">UI in practice</h1>{" "}
      </section>
      <Img
        fluid={data.ui.childImageSharp.fluid}
        style={{
          margin: "0 auto",
          maxWidth: "1400px",
          maxHeight: "1000px",
          borderRadius: "16px",
          marginBottom: "64px",
        }}
      />
      <section className="section" style={{ background: colors.light }}>
        <h1 id="research">Conclusion</h1>
        <div className="max-length">
          We successfully implemented a design system that improved the
          consistency and user experience of the Famly application. The design
          system streamlined the development process, enhanced collaboration
          between designers and developers and ultimately led to a more
          satisfying product for our customers. <br />
          <br />
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Looking at the future
          </h2>
          Maintaining a Design System is an on-going, neverending process. Even
          though we managed to replace old parts of the UI, there are still many
          components that need to be redesigned, simplified or removed
          altogether. There is a long road ahead, filled with countless hours of
          user research, design and development.
        </div>
      </section>
      <Footer />
    </div>
  );
}
