import React from "react";

import "hint.css";

import "../styles/card.scss";
import "../styles/footer.scss";
import email from "../images/logos/email.svg";
import github from "../images/logos/github.svg";
import linkedin from "../images/logos/linkedin.svg";
import strava from "../images/logos/strava.png";
import dribbble from "../images/logos/dribbble.png";

const WIDTH = 32;
const HEIGHT = 32;

function IconItem({ href, src, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      className="hint--top"
      aria-label={alt}
      rel="noreferrer"
    >
      <img src={src} width={WIDTH} height={HEIGHT} alt={alt} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="footer">
      <ul>
        <IconItem
          href="mailto:dianatofan.dt@gmail.com?Subject=Hello"
          src={email}
          alt="Email"
        />
        <IconItem
          href="https://www.linkedin.com/in/diana-tofan-43730013b/"
          src={linkedin}
          alt="Linkedin"
        />
        <IconItem
          href="https://github.com/dianatofan"
          src={github}
          alt="GitHub"
        />
        <IconItem
          href="https://dribbble.com/dianatofan"
          src={dribbble}
          alt="Dribbble"
        />
        <IconItem
          href="https://www.strava.com/athletes/49741647"
          src={strava}
          alt="Strava"
        />
      </ul>
      <div className="line" />
      <small className="metadata">
        &copy; {`${new Date().getFullYear()}`} Diana Tofan. All rights reserved.
      </small>
    </footer>
  );
}
