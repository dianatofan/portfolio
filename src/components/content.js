import React from "react";

import Card from "./card";

import "../styles/content.scss";
import "../styles/header/header.scss";

export default () => (
  <>
    <div className="content front-page">
      <div className="introText animate__animated animate__fadeIn">
        <h2>Hey! I'm Diana, a frontend developer UX'er at heart.</h2>
        <h3>I love brainstorming ideas and bringing them to life.</h3>
      </div>
    </div>
    <div className="scroll-to-explore">
      EXPLORE
      <div className="icon-scroll" />
    </div>
    <h2 className="banner">COMING SOON</h2>
    {false && <Card />}
  </>
);
