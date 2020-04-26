import React from "react";
import "../styles/header.scss";
import "../styles/content.scss";
import Graph from "./graph";

export default () => {
  return (
    <div className="content">
       <h1 className="introText">
         Hey! I'm Diana, a front-end engineer at <a href="https://www.maersk.com" target="_blank">Maersk</a> Copenhagen.
         I love creating purposeful, human-centric experiences and bringing them to life.
         <div className="subtitle">Former student developer at <a href="https://www.triggerz.com/" target="_blank">Triggerz</a></div>
      </h1>
      <Graph/>
    </div>
  )
}
