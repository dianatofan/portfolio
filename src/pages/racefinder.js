import React from "react";
import Snakke from "react-snakke";
import Carousel from "nuka-carousel";

import Header from "../components/header/header";
import Footer from "../components/footer";
import ScrollToTopButton from "../components/scroll-to-top-button";
import TableOfContents from "../components/table-of-contents";

import "../styles/project.scss";

import runnerType1 from "../images/racefinder/runnerType1.png";
import runnerType2 from "../images/racefinder/runnerType2.png";
import runnerType3 from "../images/racefinder/runnerType3.png";
import runnerType4 from "../images/racefinder/runnerType4.png";

import persona1 from "../images/racefinder/persona1.png";
import persona2 from "../images/racefinder/persona2.png";

import wireframe1 from "../images/racefinder/wireframes1.jpg";
import wireframe2 from "../images/racefinder/wireframes2.jpg";
import midFidelity from "../images/racefinder/midFidelity.png";

import timeSeriesHeader from "../images/timeSeriesHeaderCrop.png";

export default function Racefinder({ location }) {
  return (
    <div className="project">
      <Snakke color="#5455d6" top="0" height="4px" zIndex="10" />
      <ScrollToTopButton />
      <Header location={location} />
      <div className="full-screen-header">
        <img
          src={timeSeriesHeader}
          alt=""
          style={{ maxHeight: "60vh", width: "100%", display: "inline-block" }}
        />
      </div>
      <section className="title-section flex-wrap">
        <h1>Racefinder</h1>
        <div className="basic-info max-length flex-wrap">
          <div>
            <div className="headline">Duration</div>
            <div>6 months</div>
          </div>
          <div>
            <div className="headline">Type</div>
            <div>Self-initiated project</div>
          </div>
          <div>
            <div className="headline">Role</div>
            <div>UX/UI designer</div>
          </div>
        </div>
      </section>
      <section className="problem">
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
      <section className="quote-section">
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
      <section className="problem" style={{ background: "white" }}>
        <h1 id="research">Research</h1>
        <div>
          <div>
            <h2>Gaining insights from runners</h2>
            <div className="max-length">
              As much as I would have loved to solve one of my personal
              frustrations, the first thing that needed to be done was to find
              out if I'm the only one experiencing the same struggles or there
              are others out there resonating with me. Prior to the interviews,
              I made sure the people I talked to are engaging in physical
              activities regularly and like participating in competitive events.
              <h1 className="statement">
                Most people agreed that the race-booking process is longer than
                necessary.
              </h1>
              This thing alone gave me the green light to carry on with my
              research.
              <div>
                <br />
                Pain points when trying to register for a race:
                <ul>
                  <li>
                    information is <b>spread all over</b> the internet
                  </li>
                  <li>
                    it's <b>tricky</b> to find all the details about one race on
                    a single page
                  </li>
                  <li>
                    the racebooking process never gets easier, it's always{" "}
                    <b>time-consuming</b>
                  </li>
                  <li>
                    <b>no mobile app</b> developed in this direction
                  </li>
                  <li>
                    race calendars are <b>not exactly focused on running</b>,
                    they usually cover more types of sports like swimming or
                    cycling
                  </li>
                  <li>
                    <b>limited filtering functionality</b> - no attributes such
                    as distance, difficulty or proximity exist
                  </li>
                </ul>
              </div>
              <div>
                After conducting{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/32230999/">
                  secondary research
                </a>
                , I identified four types of runners which would serve as my
                target audience:
                <div className="types">
                  <div className="type">
                    <div className="icon">
                      <img
                        src={runnerType1}
                        alt="icon"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="icon-description">
                      <b>Individual casual runners</b>
                      <span>
                        People for whom running is not a main sport who usually
                        run 5km or 10km and rarely participate in competitions
                      </span>
                    </div>
                  </div>
                  <div className="type">
                    <div className="icon">
                      <img
                        src={runnerType2}
                        alt="icon"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="icon-description">
                      <b>Individual competitive runners</b>
                      <span>
                        People who train very frequently and who participate in
                        5 or more events annually
                      </span>
                    </div>
                  </div>
                  <div className="type">
                    <div className="icon">
                      <img
                        src={runnerType3}
                        alt="icon"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="icon-description">
                      <b>Social competitive runners</b>
                      <span>
                        People who run with friends, colleagues, small groups or
                        clubs and participate in fewer events
                      </span>
                    </div>
                  </div>
                  <div className="type">
                    <div className="icon">
                      <img
                        src={runnerType4}
                        alt="icon"
                        width={80}
                        height={80}
                      />
                    </div>
                    <div className="icon-description">
                      <b>Devoted runners</b>
                      <span>
                        Experienced runners with more time at their disposal who
                        engage in longer distances and participate in 5 or more
                        events annually{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                Based on the main findings, I tailored two user personas that
                best describe the user needs. ---- insert carousel with personas
                ----
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="wireframes">
        <h2>Brainstorming possible solutions</h2>
        <h1 id="low-fidelity">Low-fidelity prototype</h1>
        <div className="low-fidelity">
          <img src={wireframe1} alt="wireframes" className="wireframe-image" />
          <img src={wireframe2} alt="wireframes" className="wireframe-image" />
        </div>
        <div className="mid-fidelity">
          <h1 id="mid-fidelity">Mid-fidelity prototype</h1>
          <img
            src={midFidelity}
            alt="midFidelity"
            className="wireframe-image"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
