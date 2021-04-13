import React from "react";
import Graph from "./graph";
import "../styles/header/header.scss";
import "../styles/content.scss";
import wavingHand from "../images/waving-hand.svg";
import developer from "../images/developer.svg";

export default () => (
  <div className="content">
    <h1 className="introText animate__animated animate__fadeInLeft">
      <span>
        Hey!&nbsp;
        <img src={wavingHand} className="icon" alt="" />
      </span>
      I'm Diana, a frontend developer based in Copenhagen. I love creating
      purposeful, human-centric experiences and bringing them to life.
      <div className="subtitle">
        Software engineer at{" "}
        <a href="https://www.maersk.com/" target="_blank">
          Maersk
        </a>
        &nbsp;
        <img src={developer} className="icon" alt="" />
      </div>
    </h1>
    <Graph />
  </div>
);
