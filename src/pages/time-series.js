import React from "react"
import Header from "../components/header/header"
import "../styles/about.scss"
import { User, Users, ChevronUp } from "react-feather"
import timeSeriesHeader from "../images/timeSeriesHeaderCrop.png"
import useCaseScenario from "../images/useCaseScenario.png"
import Snakke from "react-snakke"

export default ({ location }) => {
  return (
    <div>
      <Snakke color="#5455d6" top="0" height="3px" zIndex="10" />
      <ChevronUp
        size={40}
        color="#223458"
        style={{
          cursor: "pointer",
          position: "fixed",
          right: "6vw",
          bottom: "40px",
        }}
        onClick={() => {
          document
            .getElementById("header")
            .scrollIntoView({ behavior: "smooth" })
        }}
      />
      <Header location={location} />
      <div className="full-screen-header">
        <img
          src={timeSeriesHeader}
          alt=""
          style={{ maxHeight: "60vh", width: "100%", display: "inline-block" }}
        />
      </div>
      <section className="title-section">
        <h1>Visual Exploration of Time Series in Healthcare</h1>
        <div className="basic-info max-length">
          <div>
            <div className="headline">Duration</div>
            <div>6 months</div>
          </div>
          <div>
            <div className="headline">Type</div>
            <div>Personal project</div>
          </div>
          <div>
            <div className="headline">Libraries used</div>
            <div>React, Redux, D3.js</div>
          </div>
          <div>
            <div className="headline">Role</div>
            <div>Software developer | UX researcher</div>
          </div>
        </div>
      </section>
      <section className="problem">
        <h1>Overview</h1>
        <div>
          <div>
            <h2>Problem</h2>
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
            <h2>Solution</h2>
            <div className="max-length">
              This project aims to deliver a web application capable of
              generating time series visualizations rich in information and easy
              to interact with. By using quantified-self data collected from
              real subjects, the goal of the project is to help newcomers
              discover meaningful patterns in their datasets, with minimum
              effort and maximum results.
            </div>
          </div>
        </div>
      </section>
      <section className="quote-section">
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
      <section className="problem" style={{ background: "white" }}>
        <h1>Analysis</h1>
        <div>
          <div>
            <h2>Target users</h2>
            <div className="max-length">
              There are two groups of people who usually engage in a
              self-monitoring process:
              <div className="user-types">
                <div>
                  <User size={100} color="#223458" />
                  <div
                    style={{
                      color: "#223458",
                      overflow: "hidden",
                      maxLength: "25ch",
                    }}
                  >
                    <b>Private self-trackers</b> who collect information about
                    themselves voluntarily
                  </div>
                </div>
                <div>
                  <Users size={100} color="#223458" />
                  <div
                    style={{
                      color: "#223458",
                      overflow: "hidden",
                      maxLength: "25ch",
                    }}
                  >
                    <b>Individuals</b> who are pushed into self-tracking by
                    others
                  </div>
                </div>
              </div>
              This tool focuses on the second category, hence it involves many
              different actors (e.g. patient and medical practitioner) and aims
              to improve the communication between them through visual aids.
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2>Use case scenario</h2>
            <div className="max-length">
              This application primarily focuses on solving problems from the
              healthcare industry and helps medical entities diagnose and treat
              their patients. For instance it could be used by a PTSD patient
              who is regularly attending therapeutic sessions. Each time he
              encounters outbursts, he records the episodes using a one-button
              device and shares the collected data with his therapist for a
              better diagnosis and treatment.
              <img src={useCaseScenario} alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
