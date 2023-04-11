import "hint.css";
import "../styles/card.scss";
import "../styles/footer.scss";

import React from "react";
import dribbble from "../images/logos/dribbble.png";
import github from "../images/logos/github.png";
import linkedin from "../images/logos/linkedin.png";
import send from "../images/send (1).png";

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
      <div className="content">
        <h4 className="title">Let's get in touch</h4>
        <div className="email">
          <img src={send} alt="" className="send-icon" />
          dianatofan.dt@gmail.com
        </div>
        <ul className="accounts">
          <li>
            <a
              href="https://www.linkedin.com/in/diana-tofan-43730013b/"
              target="_blank"
              className="hint--bottom"
              aria-label="Linkedin"
              rel="noreferrer"
            >
              <img src={linkedin} alt="" className="redirect-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/dianatofan/"
              target="_blank"
              className="hint--bottom"
              aria-label="Dribbble"
              rel="noreferrer"
            >
              <img src={dribbble} alt="" className="redirect-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dianatofan/"
              target="_blank"
              className="hint--bottom"
              aria-label="Github"
              rel="noreferrer"
            >
              <img src={github} alt="" className="redirect-icon" />
            </a>
          </li>
        </ul>{" "}
        <div className="line" />
        <div className="metadata">
          <small>&copy; {`${new Date().getFullYear()}`} Diana Tofan</small>
          <small>Website built in Gatsby</small>
        </div>
      </div>
    </footer>
  );
}
