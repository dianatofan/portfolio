import React from "react"
import "../styles/card.scss"
import email from "../images/logos/email.svg"
import linkedin from "../images/logos/linkedin.svg"
import github from "../images/logos/github.svg"
import twitter from "../images/logos/twitter.svg"
import strava from "../images/logos/strava.png"
import "../styles/footer.scss"
import "hint.css"

const WIDTH = 32,
  HEIGHT = 32

export default () => (
  <footer>
    <ul>
      <li className="hint--top" aria-label="Email">
        <img src={email} width={WIDTH} height={HEIGHT} alt="Email" />
      </li>
      <li className="hint--top" aria-label="Linkedin">
        <img src={linkedin} width={WIDTH} height={HEIGHT} alt="Linkedin" />
      </li>
      <li className="hint--top" aria-label="Github">
        <img src={github} width={WIDTH} height={HEIGHT} alt="Github" />
      </li>
      <li className="hint--top" aria-label="Twitter">
        <img src={twitter} width={WIDTH} height={HEIGHT} alt="Twitter" />
      </li>
      <li className="hint--top" aria-label="Strava">
        <img src={strava} width={WIDTH} height={HEIGHT} alt="Strava" />
      </li>
    </ul>
    <div className="line" />
    <small className="metadata">
      &copy; 2021 Diana Tofan. All rights reserved.
    </small>
    Hello Sir,{" "}
    <span className="hint--bottom" aria-label="Thank you!">
      hover over me.
    </span>
  </footer>
)
