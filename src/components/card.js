import { navigate } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { Eye } from "react-feather";

import "../styles/card.scss";

export default function Card({ image }) {
  return (
    <div className="rectangle">
      <div className="top image" onClick={() => navigate("/racefinder")}>
        <Img
          fixed={{ ...image, aspectRatio: 1 }}
          style={{ cursor: "pointer", position: "relative" }}
        />
      </div>
      <div className="bottom">
        <div className="title">
          Visual Exploration of Time Series in Healthcare
        </div>
        <div className="description">
          Web application that generates charts based on input data Built in
          React, Redux & D3.js
        </div>
        <div className="role">DATA VISUALIZATION | UX DESIGN</div>
      </div>
    </div>
  );
}
