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

const IconItem = ({ href, src, alt }) => (
  <a href={href} target="_blank" className="hint--top" aria-label={alt}>
    <img src={src} width={WIDTH} height={HEIGHT} alt={alt} />
  </a>
)

export default () => (
  <footer>
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
        alt="Github"
      />
      <IconItem
        href="https://twitter.com/dianatfn"
        src={twitter}
        alt="Twitter"
      />
      <IconItem
        href="https://www.strava.com/athletes/49741647"
        src={strava}
        alt="Strava"
      />
    </ul>
    <div className="line" />
    <small className="metadata">
      &copy; 2021 Diana Tofan. All rights reserved.
    </small>
  </footer>
)
