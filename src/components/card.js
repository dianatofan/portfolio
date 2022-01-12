import { navigate } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { Eye } from "react-feather";

import "../styles/card.scss";

export default function Card({ image, title, description, role }) {
  return (
    <div className="rectangle">
      <div className="top image" onClick={() => navigate("/racefinder")}>
        <Img
          fixed={{ ...image, aspectRatio: 1 }}
          style={{ cursor: "pointer", position: "relative" }}
        />
      </div>
      <div className="bottom">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="role">{role}</div>
      </div>
    </div>
  );
}
