import React from "react";
import "../styles/header.scss";
import { Heart } from "react-feather";
import linkedinIcon from "../../static/svg/linkedin.svg";
import facebookIcon from "../../static/svg/facebook.svg";
import hoverIcon from "../../static/svg/facebookHover.svg";
import githubIcon from "../../static/svg/github.svg";
import emailIcon from "../../static/svg/email.svg";

const ICON_SIZE = 40;

export default () => {
  return (
    <header className="header">
      <h1 className="title">Diana Tofan</h1>
      <div>playground</div>
      <h2>
        Hi, I'm Diana, a front-end developer living in Copenhagen.
        I <Heart /> UX design and data visualization.
      </h2>
      <img src={linkedinIcon} width={ICON_SIZE} height={ICON_SIZE} alt="linkedin" />
      <img src={facebookIcon} width={ICON_SIZE} height={ICON_SIZE} alt="facebook" />
      <img src={hoverIcon} width={ICON_SIZE} height={ICON_SIZE} alt="facebook" />
      <img src={githubIcon} width={ICON_SIZE} height={ICON_SIZE} alt="github" />
      <img src={emailIcon} width={ICON_SIZE} height={ICON_SIZE} alt="emailIcon" />
    </header>
  )
}
