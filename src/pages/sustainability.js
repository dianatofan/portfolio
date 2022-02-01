import React from "react";
import Snakke from "react-snakke";
import Carousel from "nuka-carousel";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Header from "../components/header/header";
import Footer from "../components/footer";
import ScrollToTopButton from "../components/scroll-to-top-button";

import "../styles/project.scss";

import persona1 from "../images/sustainability/persona1.png";
import persona2 from "../images/sustainability/persona2.png";

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
      surveyResults: file(
        relativePath: { eq: "sustainability/surveyResults.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      checkoutFlow: file(
        relativePath: { eq: "sustainability/checkoutFlow.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      header: file(relativePath: { eq: "sustainability/cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      designSystem: file(
        relativePath: { eq: "sustainability/designSystem.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      wireframe1: file(relativePath: { eq: "sustainability/sketches.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      midFidelity: file(relativePath: { eq: "sustainability/wireframes.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      highFidelity: file(
        relativePath: { eq: "sustainability/highFidelity.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      feedback: file(relativePath: { eq: "sustainability/feedback.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      refinements: file(relativePath: { eq: "sustainability/revision.png" }) {
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
    light: "#f4ffec",
    medium: "#28c524",
    dark: "#204c1f",
  };
  return (
    <div className="project animate__animated animate__fadeIn">
      <Snakke color={colors.medium} top="0" height="4px" zIndex="10" />
      <ScrollToTopButton />
      <Header location={location} />
      <Img fluid={data.header.childImageSharp.fluid} />
      <section className="title-section">
        <div style={{ maxWidth: "35%" }}>
          <h1 style={{ marginBottom: "10px" }}>Sustainable E-Commerce</h1>
          <h3 style={{ margin: 0, color: colors.dark, opacity: 0.5 }}>
            Reimagining the checkout flow to reduce packaging waste in online
            orders
          </h3>
        </div>
        <div className="basic-info max-length">
          <div className="duration">
            <div className="headline">Duration</div>
            <div>2 months</div>
          </div>
          <div className="type">
            <div className="headline">Role</div>
            <div>UX/UI designer</div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: colors.light }}>
        <h1 id="overview">Overview</h1>
        <div>
          <div>
            <h3 className="subtitle">Problem</h3>
            <h1 className="statement">
              Online shopping has boomed in the pandemic, leading to an
              increased demand for single-use packaging.
            </h1>
            <div className="max-length">
              The COVID-19 pandemic promoted an uprecedented change in
              consumption habits due to lockdowns, causing a steep rise in the
              e-commerce sector. As convenient as it may sound for the regular
              consumer, the overuse of e-commerce services is one of the major
              contributors to plastic pollution due to excess packaging being
              thrown away in huge landfills instead of being repurposed.
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h3 className="subtitle">Goal</h3>
            <h1 className="statement">
              Design a better checkout experience focused on minimizing waste.
              {/* Create an e-commerce platform selling sustainable packaging aimed
              towards businesses. */}
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
            How can we make buyers adopt a more sustainable mindset?
            {/* How can we make businesses sell products in an
            environmentally-friendly manner? */}
          </div>
          <div className="quote-mark" style={{ textAlign: "right" }}>
            ”
          </div>
        </blockquote>
      </section>
      <div className="mid-fidelity" style={{ padding: "4rem 6vw" }}>
        <h1 style={{ marginBottom: "40px" }}>Design process</h1>
        <Img
          fluid={data.designProcess.childImageSharp.fluid}
          style={{ margin: "0 auto" }}
        />
      </div>
      <section className="section" style={{ background: "white" }}>
        <h1 id="research">Research</h1>
        <div>
          <h2>User survey</h2>
          <div className="max-length">
            I started the design process by collecting information from people
            around me regarding their online shopping habits. In order to
            collect as many answers as possible, I used an online survey with
            various questions on the topic of online shopping, to identify how
            informed they are with regards to sustainability and the negative
            impact over-shopping can have on the environment. 25 persons
            completed the the survey.
            <Img
              fluid={data.surveyResults.childImageSharp.fluid}
              style={{ margin: "60px auto" }}
            />
            <p>Key mentions in the user survey:</p>
            <ul>
              <li>
                People have acknowledged they started{" "}
                <b>ordering more items online</b> and admitted to{" "}
                <b>throwing away most of the boxes.</b>
              </li>
              <li>
                <b>Overpacking</b> is also a common issue among many shoppers as
                they often get sent packages that are too big for what they
                ordered.
              </li>
              <li>
                {" "}
                Most of the e-commerce websites have{" "}
                <b>not taken the appropriate measures</b> to reduce single-use
                packaging yet, even though customers would be open to the idea.
              </li>
            </ul>
            <h1 className="statement">
              One of the greatest concerns regarding single-use packaging and
              its harmful effects on the environment is people's lack of
              knowledge on the topic.{" "}
            </h1>
            <p>
              Most subjects have stated that even though they are aware online
              shopping is bad for the environment, they are unaware{" "}
              <i>how bad</i> it actually is and where does packaging waste end
              up.
            </p>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: colors.light }}>
        <h1>Personas</h1>
        <div style={{ width: "100%", margin: "0" }}>
          <h2 style={{ margin: "0 12vw 1vw 6vw" }}>Defining online buyers</h2>
          <p style={{ margin: "0 12vw 0 6vw" }}>
            After researching, I created two personas that best shape the
            potential users of this app, along with their needs and
            frustrations. I concentrated on two types of users:
            <ul>
              <li>online orders consumers</li>
              <li>e-commerce business owners</li>
            </ul>
            Throughout the rest of the design process, I focused on solving
            their problems and come up with an improved checkout concept when
            shopping online for an item, that would benefit both user segments.
          </p>
          <Carousel
            enableKeyboardControls
            framePadding="100px"
            wrapAround={false}
            defaultControlsConfig={{
              prevButtonText: "<",
              prevButtonStyle: {
                borderRadius: "50%",
                width: "35px",
              },
              nextButtonText: ">",
              nextButtonStyle: {
                borderRadius: "50%",
                width: "35px",
              },
            }}
          >
            <img src={persona1} alt="persona1" />
            <img src={persona2} alt="persona2" />
          </Carousel>
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1>Ideate</h1>
        <div>
          <div className="max-length">
            <h2>How does a checkout flow look like?</h2>
            <p>
              I continued by researching the structure of a typical checkout
              experience on mobile when purchasing items online. Most e-commerce
              apps have 6 checkout screens, as depicted in the following image
              (courtesy of{" "}
              <a
                href="https://bsscommerce.com/blog/one-step-checkout-facts-statistics/"
                style={{ color: colors.medium }}
                target="_blank"
              >
                BSS Commerce
              </a>
              ) :
            </p>
            <Img
              fluid={data.checkoutFlow.childImageSharp.fluid}
              style={{ margin: "0 auto" }}
            />
            <h2 style={{ marginTop: "60px" }}>Initial sketches</h2>
            <p>
              I had an idea in mind on how to design the checkout flow, which I
              sketched on paper. My main goal was to create a customizable
              experience for the users where they decide what options suit them
              best in terms of delivery and packaging, while{" "}
              <b>making them aware of the environmental consequences.</b>
            </p>
            <Img
              fluid={data.wireframe1.childImageSharp.fluid}
              style={{ filter: "grayscale(100%)", margin: "0 auto" }}
            />
            <h1 className="statement">A little goes a long way.</h1>
            <p>
              That's the principle upon which I redesigned the e-commerce
              checkout experience for improving sustainability. I tried making
              customers <i>aware</i> of environmental risks associated to their
              shopping choices by <b>embedding small snippets of information</b>{" "}
              associated to ecological waste. Besides educating online shoppers
              on sustainability, I also came up with a <b>reward system</b> that
              grants customers discounts if they choose the greener options for
              their delivery.
            </p>
            <h1 className="statement">
              Informational rewards satiate a user's curiosity.
            </h1>
            <p>
              The reward system I came up with consists of "eco points" that the
              buyer receives whenever he opts for a planet-friendly option for
              delivery or packaging. As advertised in the banner (first screen -
              bottom), eco points can be used to get discounts in the next
              order.
            </p>
          </div>
        </div>
      </section>
      <section className="wireframes">
        <div className="full-screen-text">
          <p>
            The checkout experience consists of 6 screens, namely:
            <ul style={{ marginBottom: "60px" }}>
              <li style={{ marginBottom: "10px" }}>
                <i>Product page</i> - where the user has the option to read more
                details about a certain item and add it to cart
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Cart page</i> - displaying all the items that were added to
                cart and the subtotal price (excluding the shipping fee)
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Checkout screen I: Shipping</i> - here the user adds the home
                address and picks a delivery option (either expedited or
                standard, being informed by the app that standard delivery is
                more sustainable); if ground shipping is selected, the user gets
                eco points
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Checkout screen II: Packaging</i> - here the user can opt for
                sustainable packaging or zero packaging, being rewarded with eco
                points accordingly
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Checkout screen III: Payment</i> - here the user can add
                payment information and confirm payment for the order
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Checkout screen IV: Confirmation</i> - screen notifying the
                user that the order was successfully submitted
              </li>
            </ul>
          </p>
        </div>
        <div className="mid-fidelity" style={{ background: colors.light }}>
          <h1 style={{ marginBottom: "40px" }}>Mid-fidelity prototype</h1>
          <Img
            fluid={data.midFidelity.childImageSharp.fluid}
            style={{ margin: "0 auto" }}
          />
        </div>
        <div className="high-fidelity" style={{ background: colors.dark }}>
          <h1 style={{ margin: 0 }}>High-fidelity prototype</h1>
          <Img
            fluid={data.highFidelity.childImageSharp.fluid}
            style={{ margin: "0 auto" }}
          />
        </div>{" "}
        <div className="mid-fidelity">
          <h1 style={{ marginBottom: "40px" }}>Design system</h1>
          <Img
            fluid={data.designSystem.childImageSharp.fluid}
            style={{ margin: "0 auto" }}
          />
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1>User testing</h1>
        <div>
          <h2>Validating assumptions</h2>
          <div className="max-length">
            After creating the high-fidelity prototpe, I conducted usability
            testing with five participants (face to face). My main goal was to
            detect whether the participants found the eco-points rewarding
            system powerful and if they learnt new things about sustainable
            shopping while navigating through the checkout screens. There were
            no tasks prepared and during the interviews I payed close attention
            to the participants' reactions when they interacted with the
            checkout screens. The participants were asked to think out loud. On
            the whole, the prototype met its purpose, but it also generated a
            few concerns, as detailed in the feedback grid below.
          </div>
        </div>
      </section>
      <div className="mid-fidelity" style={{ background: colors.dark }}>
        <Img
          fluid={data.feedback.childImageSharp.fluid}
          style={{ margin: "0 auto" }}
        />
      </div>
      <div
        className="mid-fidelity"
        style={{ background: "#e3e3e3", padding: "4rem 6vw" }}
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
          This project allowed me to learn more about UX design in e-commerce.
          Even though the presented solution is a specific case that cannot be
          applied to all online stores due to differences in logistics, the
          central idea stays the same - users should be informed of the
          environmental impact associated to their online purchases and rewarded
          with small bonuses where possible.
          <br />
          <br />
          If I were to continue expanding the checkout screens, I would:
          <ul>
            <li>
              add numerical statistics or illustrations instead of textual facts
              to increase awareness
            </li>
            <li>find a way to reduce the number of checkout screens</li>
            <li>
              replace the tooltips with fullscreen modals to include more facts
            </li>
          </ul>
        </div>
      </section>
      <div className="iframe-container">
        <iframe
          style={{
            border: 0,
          }}
          width="1400"
          height="800"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Flu0VBSCpiFcH1fJCLtOk5l%2FUntitled%3Fnode-id%3D1333%253A1216%26scaling%3Dscale-down%26page-id%3D1257%253A1084%26starting-point-node-id%3D1333%253A1216%26show-proto-sidebar%3D1%26hide-ui%3D1"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
