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

export default function Racefinder({ location }) {
  const data = useStaticQuery(graphql`
    query {
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
    light: "#eef3ff",
    medium: "#007bff",
    dark: "#2a3d62",
  };
  return (
    <div className="project animate__animated animate__fadeIn">
      <Snakke color={colors.medium} top="0" height="4px" zIndex="10" />
      <ScrollToTopButton />
      <Header location={location} />
      <Img fluid={data.header.childImageSharp.fluid} />
      <section className="title-section">
        <div>
          <h1 style={{ marginBottom: "10px" }}>Racefinder</h1>
          <h3 style={{ margin: 0, color: colors.dark, opacity: 0.5 }}>
            Event discovery app for runners
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
      <section className="section" style={{ background: colors.light }}>
        <h1 id="overview">Overview</h1>
        <div>
          <div>
            <h3 className="subtitle">Problem</h3>
            <h1 className="statement">Finding races takes forever.</h1>
            <div className="max-length">
              As an amateur runner who signs up for races regularly, I am
              struggling to find an app where I can keep track of the upcoming
              races in my area and book a spot at the click of a button. Even
              though there are a few websites displaying the upcoming races, the
              distances are sometimes inconvenient or the races are simply too
              far away location-wise. Since there are no filtering options on
              any of them, I always end up scrolling through a long list of
              running events I’m not interested in until I reach the ones I
              would like to attend. This takes time and energy.{" "}
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h3 className="subtitle">Goal</h3>
            <h1 className="statement">
              Create an app targeted at the running community that allows
              runners to find and book races in their area directly from their
              smartphones.
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
            How can we create a meaningful experience that helps runners plan
            their upcoming races more effectively?
          </div>
          <div className="quote-mark" style={{ textAlign: "right" }}>
            ”
          </div>
        </blockquote>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1 id="research">Research</h1>
        <div>
          <h2>Gaining insights from runners</h2>
          <div className="max-length">
            As much as I would have loved to solve one of my personal
            frustrations, the first thing that needed to be done was to find out
            if I'm the only one experiencing the same struggles or there are
            others out there resonating with me. Prior to the interviews, I made
            sure the people I talked to are engaging in physical activities
            regularly and like participating in competitive events.
            <h1 className="statement">
              Most people agreed that the race-booking process is longer than
              necessary.
            </h1>
            This thing alone gave me the green light to carry on with my
            research.
          </div>
        </div>
      </section>
      <section className="survey">
        <Img
          fluid={data.survey.childImageSharp.fluid}
          style={{ margin: "0 auto" }}
        />
      </section>
      <section className="section">
        <h1>Findings</h1>
        <div>
          <p>
            Pain points when trying to register for a race:
            <ul>
              <li>
                information is <b>spread all over</b> the internet
              </li>
              <li>
                it's <b>tricky</b> to find all the details about one race on a
                single page
              </li>
              <li>
                the racebooking process never gets easier, it's always{" "}
                <b>time-consuming</b>
              </li>
              <li>
                <b>no mobile app</b> developed in this direction
              </li>
              <li>
                race calendars are <b>not exactly focused on running</b>, they
                usually cover more types of sports like swimming or cycling
              </li>
              <li>
                <b>limited filtering functionality</b> - no attributes such as
                distance, difficulty or proximity exist
              </li>
            </ul>
          </p>
          <h2>Secondary research</h2>
          <div>
            After conducting{" "}
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/32230999/"
              style={{ color: colors.medium }}
            >
              secondary research
            </a>
            , I identified four types of runners which would serve as my target
            audience:
            <ul className="types">
              <li className="type">
                <div className="icon" style={{ background: colors.dark }}>
                  <img src={runnerType1} alt="icon" width={80} height={80} />
                </div>
                <div className="icon-description">
                  <b>Individual casual runners</b>
                  <span>
                    People for whom running is not a main sport who usually run
                    5km or 10km and rarely participate in competitions
                  </span>
                </div>
              </li>
              <li className="type">
                <div className="icon" style={{ background: colors.dark }}>
                  <img src={runnerType2} alt="icon" width={80} height={80} />
                </div>
                <div className="icon-description">
                  <b>Individual competitive runners</b>
                  <span>
                    People who train very frequently and who participate in 5 or
                    more events annually
                  </span>
                </div>
              </li>
              <li className="type">
                <div className="icon" style={{ background: colors.dark }}>
                  <img src={runnerType3} alt="icon" width={80} height={80} />
                </div>
                <div className="icon-description">
                  <b>Social competitive runners</b>
                  <span>
                    People who run with friends, colleagues, small groups or
                    clubs and participate in fewer events
                  </span>
                </div>
              </li>
              <li className="type">
                <div className="icon" style={{ background: colors.dark }}>
                  <img src={runnerType4} alt="icon" width={80} height={80} />
                </div>
                <div className="icon-description">
                  <b>Devoted runners</b>
                  <span>
                    Experienced runners with more time at their disposal who
                    engage in longer distances and participate in 5 or more
                    events annually{" "}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <h1>Personas</h1>
        <div style={{ width: "100%", margin: "0" }}>
          <h2 style={{ margin: "0 12vw 1vw 6vw" }}>Defining users</h2>
          <p style={{ margin: "0 12vw 0 6vw" }}>
            After researching, I created two personas that best shape the
            potential users of this app, along with their needs and
            frustrations. Throughout the rest of the design process, I focused
            on solving their problems and come up with improvements.
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
      <section className="wireframes">
        <div className="full-screen-text">
          <h2>Brainstorming possible solutions</h2>
          <p>
            Having a rough idea of how the app would look, I started sketching
            some initial ideas on paper. The central element of this app is a{" "}
            <b>street map</b> with pinpoints indicating where future races will
            be taking place. The <b>search filters</b> are equally important --
            since they are the ones that were lacking in the current event
            discovery apps. Additional features that I included were: the
            ability to switch between map view and <b>expandable cards</b> and a
            page dedicated to <b>race history</b>.
          </p>
          <p>
            I showed the wireframes to a handful of people to get their opinion
            on it and updated the design accordingly in the next iteration
            (mid-fidelity prototype).
          </p>
        </div>
        <div style={{ margin: "100px 0" }}>
          <h1 style={{ textAlign: "center" }}>Low-fidelity prototype</h1>
          <div className="low-fidelity">
            <Img
              fluid={data.wireframe1.childImageSharp.fluid}
              style={{ filter: "grayscale(100%)", margin: "0 auto" }}
            />
            <Img
              fluid={data.wireframe2.childImageSharp.fluid}
              style={{ filter: "grayscale(100%)", margin: "0 auto" }}
            />
          </div>
        </div>
        <div className="full-screen-text">
          <p>
            Most of the layout was kept with a few changes:
            <ul style={{ marginBottom: "60px" }}>
              <li style={{ marginBottom: "10px" }}>
                <i>Continue without login [removed]</i> - I initially thought
                having a "guest mode" available would determine more people to
                use the app, however after sharing my idea I realized it
                wouldn't be a very helpful feature. Using an app in guest mode
                loses your data, while most people want to have access to it.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Search filters [adjusted]</i> - The race length and proximity
                were kept, however "difficulty" was removed due to its ambiguity
                and subjective meaning. Besides, a new filter was added, namely
                the start & end date, for being able to set a predefined time
                span in which to search for races.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Expandable cards [adjusted]</i> - In List view, the plan was
                to create expandable cards that when expanded,would display
                additional information about the selected race. There would be a
                'Register' button that when clicked redirected to the
                registration form on the race's website. These cards turned into
                simple, unexpandable (but clickable) cards since the amount of
                text they contained was too large and the users could easily
                lose focus. When clicked, the cards are now redirecting to a new
                page with race details and actions to perform (register or
                invite friends).
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Logo [moved]</i> - the logo was ultimately moved on top of
                the page, as it would overlap with the navigation menu on
                bottom.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Map/List toggle [moved]</i> - the Map/List radio buttons were
                also moved on top of the page for the same reasons listed above.
              </li>
            </ul>
          </p>
        </div>
        <div className="mid-fidelity" style={{ background: colors.light }}>
          <h1 style={{ marginBottom: "40px" }}>Mid-fidelity prototype</h1>
          <Img fluid={data.midFidelity.childImageSharp.fluid} />
        </div>
        <div className="high-fidelity" style={{ background: colors.dark }}>
          <h1 style={{ margin: 0 }}>High-fidelity prototype</h1>
          <p className="subtitle">Sign-up flow</p>
          <Img
            fluid={data.signUpFlow.childImageSharp.fluid}
            style={{ margin: "0 auto" }}
          />
          <p className="subtitle">Onboarding</p>
          <Img
            fluid={data.onboarding.childImageSharp.fluid}
            style={{ margin: "0 auto" }}
          />
          <p className="subtitle">Profile page & previous races</p>
          <Img
            fluid={data.profileAndHistory.childImageSharp.fluid}
            style={{ margin: "0 auto" }}
          />
          <p className="subtitle">Filter races, register & send invitations</p>
          <Img
            fluid={data.map.childImageSharp.fluid}
            style={{ margin: "0 auto" }}
          />
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1>User testing</h1>
        <div>
          <h2>Identifying bottlenecks</h2>
          <div className="max-length">
            After creating the high-fidelity prototpe, I conducted usability
            testing with four participants (three in person and one online via
            screen-sharing). My main goal was to detect whether the participants
            found the app intuitive and were able to perform tasks without extra
            help needed, so I came up with a series of tasks that best described
            the purpose of the app and observed how the people interacted with
            the prototype. Tasks included looking for a race with custom
            parameters, sending an invitation, register for a race and access
            the previous races. Overall, the testing went very well and the
            users completed the tasks easily. Except for a few minor things.
            <Img
              fluid={data.usabilityTest.childImageSharp.fluid}
              style={{ margin: "20px auto" }}
            />
            <h1 className="statement">
              Participants had the tendency to zoom in the map.
            </h1>
            However this feature was not supported at the moment. They also
            wished to see their current location on the map, along with the
            pinpoints. Regarding the invitations, there was no way to tell what
            people you previously invited to a race, so having that in plain
            sight would have also been helpful.
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
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Flu0VBSCpiFcH1fJCLtOk5l%2FUntitled%3Fnode-id%3D251%253A6118%26scaling%3Dscale-down%26page-id%3D241%253A380%26starting-point-node-id%3D251%253A6118%26hide-ui=1"
          allowfullscreen
          allowtransparency
          frameBorder={0}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
