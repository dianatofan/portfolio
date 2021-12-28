import { ChevronUp, User, Users } from 'react-feather';
import React from 'react';
import Snakke from 'react-snakke';

import Header from '../components/header/header';

import '../styles/about.scss';
import timeSeriesHeader from '../images/timeSeriesHeaderCrop.png';

export default function Project({ title, colors }) {
const { primaryColor, secondaryColor } = colors;
  return (
    <div>
      <Snakke color={primaryColor} top="0" height="3px" zIndex="10" />
      <ChevronUp
        size={40}
        color="#223458"
        style={{
          cursor: 'pointer',
          position: 'fixed',
          right: '6vw',
          bottom: '40px',
        }}
        onClick={() => {
          document
            .getElementById('header')
            .scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <Header location={location} />
      <div className="full-screen-header">
        <img
          src={timeSeriesHeader}
          alt=""
          style={{ maxHeight: '60vh', width: '100%', display: 'inline-block' }}
        />
      </div>
      <section className="title-section">
        <h1>Racefinder</h1>
        <div className="basic-info max-length">
          <div>
            <div className="headline">Duration</div>
            <div>6 months</div>
          </div>
          <div>
            <div className="headline">Type</div>
            <div>Self-initiated project</div>
          </div>
          <div>
            <div className="headline">Libraries used</div>
            <div>React, Redux, D3.js</div>
          </div>
          <div>
            <div className="headline">Role</div>
            <div>UX/UI designer</div>
          </div>
        </div>
      </section>
      <section className="problem">
        <h1>Overview</h1>
        <div>
          <div>
            <h2>Problem</h2>
            <div className="max-length">
              As an amateur runner who signs up for races regularly, I am struggling to find an app where I can keep track of the upcoming races in my area and book a spot at the click of a button. Even though there are a few websites displaying the upcoming races, the distances are sometimes inconvenient or the races are simply too far away location-wise. Since there are no filtering options on any of them, I always end up scrolling through a long list of running events I’m not interested in until I reach the ones I would like to attend.
            </div>
          </div>
          <div style={{ marginTop: '50px' }}>
            <h2>Goal</h2>
            <div className="max-length">
              Create an app targeted at the running community that allows runners to find and book races in their area directly from their smartphones.
            </div>
          </div>
        </div>
      </section>
      <section className="quote-section">
        <blockquote>
          <div className="quote-mark" style={{ textAlign: 'left' }}>
            “
          </div>
          <div className="quote max-length">
            How can we create a meaningful experience that helps runners plan their upcoming races more effectively?
          </div>
          <div className="quote-mark" style={{ textAlign: 'right' }}>
            ”
          </div>
        </blockquote>
      </section>
      <section className="problem" style={{ background: 'white' }}>
        <h1>Competitive analysis</h1>
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
                      color: '#223458',
                      overflow: 'hidden',
                      maxLength: '25ch',
                    }}
                  >
                    <b>Private self-trackers</b>
                    {' '}
                    who collect information about
                    themselves voluntarily
                  </div>
                </div>
                <div>
                  <Users size={100} color="#223458" />
                  <div
                    style={{
                      color: '#223458',
                      overflow: 'hidden',
                      maxLength: '25ch',
                    }}
                  >
                    <b>Individuals</b>
                    {' '}
                    who are pushed into self-tracking by
                    others
                  </div>
                </div>
              </div>
              This tool focuses on the second category, hence it involves many
              different actors (e.g. patient and medical practitioner) and aims
              to improve the communication between them through visual aids.
            </div>
          </div>
          <div style={{ marginTop: '50px' }}>
            <h2>Use case scenario</h2>
            <div className="max-length">
              This application primarily focuses on solving problems from the
              healthcare industry and helps medical entities diagnose and treat
              their patients. For instance it could be used by a PTSD patient
              who is regularly attending therapeutic sessions. Each time he
              encounters outbursts, he records the episodes using a one-button
              device and shares the collected data with his therapist for a
              better diagnosis and treatment.
              {/* <img src={useCaseScenario} alt="" style={{ width: '100%' }} /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
