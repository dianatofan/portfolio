import React from "react";
import Snakke from "react-snakke";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Header from "../components/header/header";
import Footer from "../components/footer";
import ScrollToTopButton from "../components/scroll-to-top-button";

import { User, Users } from "react-feather";

import "../styles/project.scss";

export default function TimeSeries({ location }) {
  const data = useStaticQuery(graphql`
    query {
      header: file(
        relativePath: { eq: "time-series/timeSeriesHeaderCrop.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      useCase: file(relativePath: { eq: "time-series/useCaseScenario.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      system: file(relativePath: { eq: "time-series/system.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      app: file(relativePath: { eq: "time-series/app.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      responsive: file(relativePath: { eq: "time-series/responsive.png" }) {
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
    light: "#F3F3FD",
    medium: "#5455d6",
    dark: "#535377",
  };
  return (
    <div className="project animate__animated animate__fadeIn">
      <Snakke color={colors.medium} top="0" height="4px" zIndex="10" />
      <ScrollToTopButton />
      <Header location={location} />
      <Img fluid={data.header.childImageSharp.fluid} />
      <section className="title-section">
        <div>
          <h1 style={{ marginBottom: "10px" }}>
            Visual Exploration of Time Series
          </h1>
          <h3 style={{ margin: 0, color: colors.dark, opacity: 0.5 }}>
            Medical dashboard for doctors and patients
          </h3>
        </div>
        <div className="basic-info max-length">
          <div className="duration">
            <div className="headline">Duration</div>
            <div>6 months</div>
          </div>
          <div className="type">
            <div className="headline">Type</div>
            <div>Personal project</div>
          </div>
          <div className="role">
            <div className="headline">Role</div>
            <div>UX/UI designer & developer</div>
          </div>
        </div>
      </section>
      <section className="section" style={{ background: colors.light }}>
        <h1 id="overview">Overview</h1>
        <div>
          <div>
            <h3 className="subtitle">Problem</h3>
            <h1 className="statement">
              Healthcare professionals need an easy-to-use tool for analyzing
              their patients' data.
            </h1>
            <div className="max-length">
              Sharing self-tracked data with others to seek treatment or
              solutions to a problem led to an ever growing number of healthcare
              professionals who must rely on time-dependent visualizations to
              help their patients. Although they may be knowledgeable in their
              field, not all of them are computer experts, hence they need an
              easy-to-use tool in order to analyze and extract relevant
              information from the data under investigation.
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h3 className="subtitle">Goal</h3>
            <h1 className="statement">
              Deliver a web application capable of generating time series
              visualizations rich in information and easy to interact with.
            </h1>
            <div className="max-length">
              By using quantified-self data collected from real subjects, the
              goal of the project is to help newcomers discover meaningful
              patterns in their datasets, with minimum effort and maximum
              results.
            </div>
          </div>
        </div>
      </section>
      <section className="quote-section" style={{ background: colors.dark }}>
        <blockquote>
          <div className="quote-mark" style={{ textAlign: "left" }}>
            “
          </div>
          <div className="quote max-length">
            How to extract meaningful patterns from temporal data with minimum
            effort and maximum results?
          </div>
          <div className="quote-mark" style={{ textAlign: "right" }}>
            ”
          </div>
        </blockquote>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1 id="research">Analysis</h1>
        <div>
          <h2>Target users</h2>
          <div className="max-length">
            There are two groups of people who usually engage in a
            self-monitoring process:
            <ul className="types">
              <li className="type">
                <div className="icon">
                  <User width={80} height={80} />
                </div>
                <div className="icon-description">
                  <b>Private self-trackers</b> who collect information about
                  themselves voluntarily
                </div>
              </li>
              <li className="type">
                <div className="icon">
                  <Users width={80} height={80} />
                </div>
                <div className="icon-description">
                  <b>Individuals</b> who are pushed into self-tracking by others
                </div>
              </li>
            </ul>
            This tool focuses on the second category, hence it involves many
            different actors (e.g. patient and medical practitioner) and aims to
            improve the communication between them through visual aids.
            <h2 style={{ marginTop: "60px" }}>Use case scenario</h2>
            This application primarily focuses on solving problems from the
            healthcare industry and helps medical entities diagnose and treat
            their patients. For instance it could be used by a PTSD patient who
            is regularly attending therapeutic sessions. Each time he encounters
            outbursts, he records the episodes using a one-button device and
            shares the collected data with his therapist for a better diagnosis
            and treatment.
            <Img
              fluid={data.useCase.childImageSharp.fluid}
              style={{ margin: "0 auto" }}
            />
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1 id="research">Design</h1>
        <div>
          <h2>System overview</h2>
          <div className="max-length">
            Each dataset belongs to a real person who - at some point - tracked
            specific events in his/her life. The data was recorded with the help
            of a one-button device that when pressed, stored the corresponding
            timestamp in a CSV file.
            <Img
              fluid={data.system.childImageSharp.fluid}
              style={{ margin: "0 auto" }}
            />
            A timestamp is a sequence of characters encoding time-oriented
            information. In this project, all timestamps have a common
            structure: <code>YYYY-MM-DDTHH:mm:ss</code>, where{" "}
            <code>YYYY-MM-DD</code> represents the date and{" "}
            <code>HH:mm:ss </code>is the hour when the observation occurred.
            <h1 className="statement">
              By relying on data visualization techniques, the main goal of the
              system is to help users quickly identify patterns, reflect on them
              and gain useful insights.
            </h1>{" "}
          </div>
        </div>
      </section>
      <section className="wireframes" style={{ background: colors.light }}>
        <div className="full-screen-text" style={{ paddingTop: "40px" }}>
          <h1>App overview</h1>
          <div style={{ margin: "100px 0" }}>
            <Img
              fluid={data.app.childImageSharp.fluid}
              st
              syle={{ margin: "0 auto" }}
            />
          </div>
          <p>
            This time-series visualization is the result of 3 major components
            strongly tied together:
            <ul style={{ paddingBottom: "60px" }}>
              <li style={{ marginBottom: "10px" }}>
                <i>Calendar heatmap</i> - The central component on which this
                prototype is based, showing the concentration of events over the
                year. The weekdays, week numbers, individual days and month
                names are clickable and will update the bar chart below with
                corresponding data. There is also a hidden shortcut for allowing
                users to compare 2 elements between each other by clicking on
                the first one and shift-clicking the second.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Bar chart</i> - It shows the time-of-day variation of the
                self-tracked events. When any of the 3 checkboxes is checked, an
                area chart is rendered on top to compare the selected day to
                other days in the same week, month or weekday. The more
                observations registered, the darker the color of each bar.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <i>Radial chart</i> - It shows the most impactful weekdays from
                the entire dataset and supports mouse-over effects when
                inspecting each circular bar - it will highlight the
                corresponding weekday in the calendar heatmap.
              </li>
            </ul>
          </p>
        </div>
      </section>
      <section className="wireframes" style={{ background: "white" }}>
        <div className="full-screen-text" style={{ paddingTop: "40px" }}>
          <h1>Responsive design</h1>
          <div style={{ margin: "100px 0" }}>
            <Img
              fluid={data.responsive.childImageSharp.fluid}
              syle={{ margin: "0 auto" }}
            />
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1>User testing</h1>
        <div className="max-length">
          <p>
            The usability test was carried out on four persons and two datasets
            were used. In the first one, 5,743 observations were recorded,
            whereas the second presented 647 timestamps. Both datasets belong to
            real persons who - at some point - tracked specific events in their
            lives using the one-button device.
          </p>
          <p>
            The survey consisted of 10 questions which covered most of the
            functionalities implemented in the visualization. The first half of
            the questions was based on the first dataset and the rest on the
            second. There were plenty of tasks to perform with various levels of
            difficulty. For finding out what the subjects were thinking while
            answering the questions, they were asked to think out loud and
            explain their actions.
          </p>
          <p>
            On the whole, the users enjoyed playing with the visualization and
            completed the survey without experiencing major difficulties.{" "}
          </p>
          <h2>Analysis of the results</h2>
          <p>
            Overall, the calendar heatmap was intuitive and posed no major
            problems. In terms of the bar chart, it was easy to interpret the
            meaning of each bar, and the subjects enjoyed the animation that
            showed up when switching from one day to another. The radial chart
            served its purpose too.
          </p>
          <h1 className="statement">
            The most challenges were faced during the interaction with the area
            graph, plotted over the bar chart.
          </h1>
          <p>
            Although the participants were informed what kind of values it
            displayed, they were reluctant to use it during the evaluation and
            would rather rely on the heatmap or bar chart to find the correct
            answers.{" "}
          </p>
        </div>
      </section>
      <section
        className="section"
        style={{ background: colors.dark, color: "white" }}
      >
        <h1>Lessons learned</h1>
        <div className="max-length">
          <p>
            Reflecting on the survey results, it can be deduced that even though
            the time-series visualization looks simple at first sight, it is
            actually not so easy to decipher the meaning of all values being
            displayed. The most important lesson that I learned was that
            <h1 className="statement">
              {" "}
              The novice user is reluctant to using overlapping plots and would
              prefer two simple charts instead of a more advanced one.
            </h1>
          </p>
          <p>
            Besides, hidden shortcuts often get overlooked and the users don't
            benefit fully from the app.
          </p>
        </div>
      </section>
      <section className="section" style={{ background: "white" }}>
        <h1>Demo</h1>
        <div
          style={{
            textAlign: "center",
            fontSize: "1.6rem",
          }}
        >
          <a
            href="https://dianatofan.github.io/Time-Series-Visualization/"
            style={{ color: colors.medium }}
          >
            Open website
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
