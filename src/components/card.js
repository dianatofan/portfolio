import { navigate } from "gatsby";
import React, { useState } from "react";
import Img from "gatsby-image";
import { Eye } from "react-feather";
import "../styles/card.scss";

export default function Card({ image, title, description, role, url }) {
  const [icon, showIcon] = useState(false);
  return (
    <div className="rectangle">
      <div
        className={`top image ${url}`}
        onClick={() => navigate(`/${url}`)}
        onMouseOver={() => showIcon(true)}
        onMouseLeave={() => showIcon(false)}
      >
        {icon && (
          <Eye
            className="animate__animated animate__fadeIn eye-icon"
            width={80}
            height={80}
          />
        )}
        <Img
          fluid={{ ...image, aspectRatio: 1 }}
          style={{ cursor: "pointer", position: "relative" }}
        />
      </div>
      <div className={`bottom ${icon ? "slide-down" : ""}`}>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="role">{role}</div>
      </div>
    </div>
  );
}
