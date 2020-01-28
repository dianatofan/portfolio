import React, { useState } from "react";
import "../styles/header.scss";
import { Heart } from "react-feather";
import linkedinIcon from "../../static/svg/linkedin.svg";
import facebookIcon from "../../static/svg/facebook.svg";
import hoverIcon from "../../static/svg/facebookDefault.svg";
import githubIcon from "../../static/svg/github.svg";
import emailIcon from "../../static/svg/email.svg";
import logo from "../../static/svg/logoDiana.svg";
import { Menu, X } from "react-feather"
import { Link } from "gatsby"

const ICON_SIZE = 50;

export default () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openHamburgerMenu = val => {
    setMenuOpen(!!val);
  };
  return (
    <header className="header">
      {/* <div className="logo">dt</div> */}
      <img src={logo} width={ICON_SIZE} height={ICON_SIZE} alt="Diana Tofan" />
      <ul className="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Projects</Link></li>
        <li><Link to="/">Contact</Link></li>
      </ul>
      {
        isMenuOpen ? <X size={35} className="crossIcon" onClick={() => openHamburgerMenu()} /> : <Menu size={35} className="hamburgerMenu" onClick={() => openHamburgerMenu(true)} />
      }
      {/* <h2 className="introText">
        <h1>Hi, I'm Diana</h1>
        I'm a front-end developer living in Copenhagen.
        <div>
          I <Heart className="heartIcon" /> UX design and data visualization.
        </div>
      </h2>
      <button>Scroll down</button>
      <img src={linkedinIcon} width={ICON_SIZE} height={ICON_SIZE} alt="linkedin" />
      <img src={facebookIcon} width={ICON_SIZE} height={ICON_SIZE} alt="facebook" />
      <img src={hoverIcon} width={ICON_SIZE} height={ICON_SIZE} alt="facebook" />
      <img src={githubIcon} width={ICON_SIZE} height={ICON_SIZE} alt="github" />
      <img src={emailIcon} width={ICON_SIZE} height={ICON_SIZE} alt="emailIcon" /> */}
    </header>
  )
}
