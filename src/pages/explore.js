import "../styles/project.scss";
import "../../node_modules/image-compare-viewer/dist/image-compare-viewer.min.css";

import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Footer from "../components/footer";
import Header from "../components/header/header";
import ImageCompare from "image-compare-viewer";
import Img from "gatsby-image";
import PasswordProtect from "../components/PasswordProtect";
import ScrollToTopButton from "../components/scroll-to-top-button";
import Snakke from "react-snakke";
import firstScreen1 from "../images/explore/firstscreen-selected.gif";
import firstScreen2 from "../images/explore/firstscreen-grindelwald.gif";
import lastScreen from "../images/explore/lastscreen.gif";
import secondScreen from "../images/explore/secondscreen-flights.gif";

export default function Explore({ location }) {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "explore/cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      stats: file(relativePath: { eq: "explore/stats.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      currentUx: file(relativePath: { eq: "explore/currentUx.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      uxNow: file(relativePath: { eq: "explore/uxnow.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      uxIdeal: file(relativePath: { eq: "explore/uxideal.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      naomi: file(relativePath: { eq: "explore/naomi.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      tripExploration: file(
        relativePath: { eq: "explore/tripExploration.png" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      getInspired: file(relativePath: { eq: "explore/getInspired.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      flights: file(relativePath: { eq: "explore/flights.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      rediscover: file(relativePath: { eq: "explore/rediscover.png" }) {
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
    light: "#f8f8f8",
    medium: "#525252",
    dark: "#000",
  };

  return (
    <PasswordProtect>
      <div className="project animate__animated animate__fadeIn">
        <Snakke color={colors.medium} top="0" height="4px" zIndex="10" />
        <ScrollToTopButton />
        <Header location={location} />
        <Img
          fluid={data.header.childImageSharp.fluid}
          className="cover-image"
        />
        <section className="title-section">
          <div>
            <h1 style={{ marginBottom: "10px" }}>
              An Enhanced Travel Experience
            </h1>
            <h3 style={{ margin: 0, color: colors.dark, opacity: 0.5 }}>
              Making Google Search the most loved tool for travellers
            </h3>
          </div>
          <div className="basic-info">
            <div className="duration">
              <div className="headline">Duration</div>
              <div>3 months</div>
            </div>
            <div className="type">
              <div className="headline">Type</div>
              <div>Design sprint</div>
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
                91% of travellers are turning to search engines when looking for
                places to visit, with the vast majority (81%) preferring to use
                Google as their most common source of travel inspiration.
              </div>
              <br />
              <div className="max-length">
                However, a big chunk of users expressed frustration when
                exploring new destinations, as they constantly have to switch
                back and forth between pages, which disrupts their trip planning
                as they drown in a sea of possibilities.
              </div>
              <br />
              <div className="max-length">
                Together with 3 UXDs and a UXR, and guided by a steering
                committee of UX leads, we embarked on a design sprint journey
                where we improved the search experience for avid travellers,
                making it easier for users to narrow down their choices when
                planning a vacation.
              </div>
            </div>
            <div style={{ marginTop: "50px", maxWidth: "75ch" }}>
              <h3 className="subtitle">Problem</h3>
              <h1 className="statement max-length">
                Current search experience for travellers is not tailored around
                their interests.
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
              How might we help travellers narrow down their choices when
              planning a vacation?
            </div>
            <div className="quote-mark" style={{ textAlign: "right" }}>
              ”
            </div>
          </blockquote>
        </section>
        <section className="section" style={{ background: "white" }}>
          <h1 id="research">What we know</h1>
          <div>
            <div className="max-length">
              We started by looking at previous research data to validate our
              assumptions and made some key discoveries:
            </div>
            <Img
              fluid={data.stats.childImageSharp.fluid}
              style={{
                margin: "0 auto",
                maxWidth: "1400px",
                maxHeight: "700px",
              }}
            />
          </div>
        </section>
        <section
          className="section"
          style={{ background: "white", marginBottom: 32 }}
        >
          <h1 id="research">Today's search experience</h1>
        </section>
        <Img
          fluid={data.currentUx.childImageSharp.fluid}
          style={{
            margin: "0 auto",
            maxWidth: "1500px",
            maxHeight: "1000px",
          }}
        />
        <section
          className="section"
          style={{ background: "white", marginBottom: 32 }}
        >
          <h1 id="research">A typical user journey is... frustrating</h1>
        </section>
        <Img
          fluid={data.uxNow.childImageSharp.fluid}
          style={{
            margin: "0 auto",
            maxWidth: "1000px",
            maxHeight: "1000px",
          }}
        />
        <section
          className="section"
          style={{ background: "white", marginBottom: 32 }}
        >
          <h1 id="research">An ideal user journey is... awesome</h1>
        </section>
        <Img
          fluid={data.uxIdeal.childImageSharp.fluid}
          style={{
            margin: "0 auto",
            maxWidth: "1000px",
            maxHeight: "1000px",
          }}
        />
        <section
          className="quote-section"
          style={{
            background: colors.dark,
            textAlign: "center",
            fontSize: "2.6rem",
            fontWeight: 500,
            maxWidth: "65ch",
          }}
        >
          <div
            style={{
              maxWidth: 800,
              margin: "0 auto",
              padding: "32px 0",
            }}
          >
            We want to help flexible travellers make confident decisions about
            where to go and when to go by offering rich and inspiring
            experiences on Search
          </div>
        </section>
        <section className="section" style={{ background: "#fff" }}>
          <h1 id="research">Meet Naomi</h1>
          <div>
            <h2>
              Naomi is a mother and a travel enthusiast, who lives in Zürich and
              is interested in booking a weekend getaway somewhere in Europe
              with her family.
            </h2>
            <Img
              fluid={data.naomi.childImageSharp.fluid}
              style={{
                margin: "0 auto",
                maxWidth: "500px",
                maxHeight: "800px",
              }}
            />
          </div>
        </section>
        <section
          className="section"
          style={{ background: "white", marginBottom: 32 }}
        >
          <h1 id="research"> Naomi's Exploration Journey</h1>
        </section>
        <Img
          fluid={data.tripExploration.childImageSharp.fluid}
          style={{
            margin: "0 auto",
            maxWidth: "1000px",
            maxHeight: "1000px",
          }}
        />
        <section
          className="section"
          style={{ background: "white", marginBottom: 32 }}
        >
          <h1 id="research" style={{ color: "#009DAE" }}>
            {" "}
            I. Get inspired
          </h1>
        </section>
        <Img
          fluid={data.getInspired.childImageSharp.fluid}
          style={{
            margin: "0 auto 32px auto",
            maxWidth: "1000px",
            maxHeight: "1400px",
          }}
        />
        <section
          className="section"
          style={{
            background: colors.light,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 id="research">Context</h1>
          <div className="max-length">
            <h3 className="subtitle">Why?</h3>
            According to a recent survey of US travelers, “exploring” is the
            most enjoyable part of the journey.
            <br />
            <br />
            <h3 className="subtitle">How?</h3>
            By creating a one stop shop that is lightweight, fun and
            informative, we can make more delightful experiences and increase
            the overall funnel.
            <br />
            <br />
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Back to Naomi's story
            </h2>
            Naomi doesn't have a solid idea for trip destinations, so she starts
            her search by typing a broad query: “weekend getaway” to get started
            in her journey.
            <br /> <br />
            First she is drawn to Grindelwald as it seems relaxing. After a
            quick peek, she thinks that it may not be kid-friendly and remembers
            seeing some family friendly places before.
            <br />
            <br />
            <img src={firstScreen2} className="device-gif" alt="" />
            <br />
            <br />
            She wants to check the map as she needs to make sure the travel time
            is manageable for the kids. She then discovers that London would be
            an affordable option. She wants to learn more.
            <br />
            <br />
            <img src={firstScreen1} className="device-gif" alt="" />
            <br />
            <br />
            After seeing some short videos, photos, maps and the details, she
            thinks that  London might be a good candidate for her weekend trip.
          </div>
        </section>
        <section
          className="section"
          style={{ background: "white", marginBottom: 32 }}
        >
          <h1 id="research" style={{ color: "#6658AA" }}>
            {" "}
            II. Look into alternatives
          </h1>
        </section>
        <Img
          fluid={data.flights.childImageSharp.fluid}
          style={{
            margin: "0 auto 32px auto",
            maxWidth: "1000px",
            maxHeight: "1300px",
          }}
        />
        <section className="section" style={{ background: colors.light }}>
          <h1 id="research">Context</h1>
          <div className="max-length">
            <h3 className="subtitle">Why?</h3>
            1/3 of users who have a destination in mind are still exploring
            travel ideas.
            <br />
            <br />
            <h3 className="subtitle">How?</h3>
            Offer alternative suggestions based on user's intent.
            <br />
            <br />
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Back to Naomi's story
            </h2>
            "London seems to be a nice choice!" Naomi starts to check the flight
            details by searching “flights to London”. However, she's also
            wondering: “are there other cheaper destinations?”, “am I missing
            out anything?”
            <br /> <br />
            <img src={secondScreen} className="device-gif" alt="" />
            <br /> <br />
            “Alternative destinations” gives Naomi suggestions based on price
            and her search history, as well as sustainable suggestions to travel
            nearby.
          </div>
        </section>
        <section
          className="section"
          style={{ background: "white", marginBottom: 32 }}
        >
          <h1 id="research" style={{ color: "#509B3C" }}>
            {" "}
            III. Rediscover the journey
          </h1>
        </section>
        <Img
          fluid={data.rediscover.childImageSharp.fluid}
          style={{
            margin: "0 auto 32px auto",
            maxWidth: "1000px",
            maxHeight: "1000px",
          }}
        />
        <section className="section" style={{ background: colors.light }}>
          <h1 id="research">Context</h1>
          <div className="max-length">
            <h3 className="subtitle">Why?</h3>
            The average length of a successful travel journey in Search is 34
            days.
            <br />
            <br />
            <h3 className="subtitle">How?</h3>
            Intelligently curate Search history to provide users with a
            personalized and up-to-date Search experience, making it easy to
            resume their search and find the information they need. <br />
            <br />
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Back to Naomi's story
            </h2>
            Naomi considers a few potential destinations, but hasn’t made up her
            mind yet. She comes back to Search and types one of places in her
            mind, “London”; the search history page shows information about
            London, which she has searched for before.
            <br /> <br />
            <img src={lastScreen} className="device-gif" alt="" />
            <br /> <br />
            She discovers that there is a Disney festival in London that her son
            would like. The flight is even cheaper than last time. London is
            calling.
          </div>
        </section>
        <section className="section" style={{ background: "white" }}>
          <h1 id="research">Putting it all together</h1>
          <div className="max-length">
            We divided the customer journey in three main stages and proposed
            solutions for each aspect of the trip planning.
            <br /> <br />
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              I. Get inspired (cross-vertical journey)
            </h2>
            Offer snackable content across diverse verticals (hotels, food,
            things to do etc.) to inspire users where to go.
            <br />
            <br />
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              II. Look into alternatives (sideway navigation)
            </h2>
            Provide compelling multi-format content streams for suggestions and
            facilitate user comparisons.
            <br />
            <br />
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              III. Rediscover the journey (multi-session)
            </h2>
            Users can revisit their search history to resume explorations,
            accompanied by insights to support their decision-making.
          </div>
        </section>
        <section className="section" style={{ background: colors.light }}>
          <h1 id="research">Conclusion</h1>
          <div className="max-length">
            We successfully proposed a new framework oriented towards travelers,
            to inspire them to travel to places that suit their needs and
            interests. This framework can be extended to multiple scenarios,
            from weekend trips to ski tours or long summer vacations. <br />
            <br />
            <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Next steps
            </h2>
            We presented our ideas to the steering committee of UX leads and
            after weekly feedback rounds, these concepts set the roadmap for
            2024 planning, however there is stil a lot of work left to do. Even
            if the concepts were validated by internal stakeholders, we still
            need to conduct more user studies with external participants to
            identify areas which might not seem so counterintuitive to the
            average traveller.
          </div>
        </section>
        <Footer />
      </div>
    </PasswordProtect>
  );
}
