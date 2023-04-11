import "../styles/card.scss";

import { Eye, EyeOff } from "react-feather";
import React, { useState } from "react";

import Img from "gatsby-image";
import { navigate } from "gatsby";

export default function Card({
  image,
  title,
  description,
  role,
  url,
  inProgress,
}) {
  const [icon, showIcon] = useState(false);
  return (
    <div className="rectangle">
      <div
        className={`top image ${url}`}
        onClick={() => !inProgress && navigate(`/${url}`)}
        onMouseOver={() => showIcon(true)}
        onMouseLeave={() => showIcon(false)}
      >
        {/* {icon &&
          (inProgress ? (
            <EyeOff
              className="animate__animated animate__fadeIn eye-icon"
              strokeWidth={1}
              width={80}
              height={80}
            />
          ) : (
            <Eye
              className="animate__animated animate__fadeIn eye-icon"
              strokeWidth={1}
              width={80}
              height={80}
            />
          ))} */}
        <Img
          fluid={{ ...image }}
          style={{
            cursor: "pointer",
            position: "relative",
            borderRadius: "16px",
          }}
          imgStyle={{ transition: "transform 0.5s linear" }}
        />
      </div>
      <div className="bottom">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        {/* <div className="role">{role}</div> */}
      </div>
    </div>
  );
}
