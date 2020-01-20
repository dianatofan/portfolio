import React from "react";
import "../styles/header.scss";
import { Linkedin, Facebook, GitHub, Mail } from 'react-feather';
export default () =>
<header class="header">
<h1 class="title">Diana Tofan</h1>
<div>playground</div>
<Linkedin />
<Facebook />
<GitHub />
<Mail />
<ul class="navigation-bar">
  <li class="item"><a href="https://www.linkedin.com/in/diana-tofan-43730013b/" target="_blank">Linkedin</a></li>
  <li class="item"><a href="https://www.facebook.com/profile.php?id=100001774881430" target="_blank">facebook</a></li>
  <li class="item"><a href="https://github.com/diana-tofan" target="_blank">GITHUB</a></li>
  <li class="item"><a href="mailto:diana_tofan@ymail.com" target="_blank">EMAIL</a></li>
</ul>
</header>
