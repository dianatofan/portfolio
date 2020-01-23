import React from "react";
import "../styles/header.scss";
import { Heart } from "react-feather";
import linkedinIcon from "../../assets/linkedin.svg";
import facebookIcon from "../../assets/facebook.svg";
import githubIcon from "../../assets/github.svg";
import emailIcon from "../../assets/email.svg";

export default () => {
  return (
    <header className="header">
<h1 className="title">Diana Tofan</h1>
<div>playground</div>
<h2>Hi,
I'm Diana, a front-end developer living in Copenhagen.
I <Heart /> UX design and data visualization.</h2>
<img src={linkedinIcon} width={40} height={40} />
<img src={facebookIcon} width={40} height={40} />
<img src={githubIcon} width={40} height={40} />
<img src={emailIcon} width={40} height={40} />
</header>
  )
}
