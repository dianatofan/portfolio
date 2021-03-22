import React from "react";
import Graph from "./graph";
import "../styles/header/header.scss";
import "../styles/content.scss";

export default () => (
  <div className="content">
    <h1 className="introText animate__animated animate__fadeInLeft animate__slow">
      <span>Hey! 👋🏻</span>
      I'm Diana, a frontend developer based in Copenhagen. I love creating
      purposeful, human-centric experiences and bringing them to life.
      <div className="subtitle">
        Software engineer at{" "}
        <a href="https://www.maersk.com/" target="_blank">
          Maersk
        </a>
        &nbsp;👩🏻‍💻
      </div>
    </h1>
    <Graph />
  </div>
);
