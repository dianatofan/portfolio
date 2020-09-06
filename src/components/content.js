import React from "react";
import Graph from "./graph";
import "../styles/content.scss";
import wavingHand from "../../static/svg/finger.svg";

export default () => {
  return (
    <div className="content">
      <h1 className="introText">
        <span>
          Hey! <img src={wavingHand} width={36} height={36} alt="" />
        </span>
        <br />
        I'm Diana, a frontend engineer at{" "}
        <a href="https://www.maersk.com" target="_blank">
          Maersk
        </a>{" "}
        Copenhagen. I love creating purposeful, human-centric experiences and
        bringing them to life.
        <div className="subtitle">
          Former student developer at{" "}
          <a href="https://www.triggerz.com/" target="_blank">
            Triggerz
          </a>
        </div>
      </h1>
      <Graph />
    </div>
  )
}
