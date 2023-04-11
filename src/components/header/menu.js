import "../../styles/header/menu.scss";
import "animate.css";

import { Link } from "gatsby";
import React from "react";

export const Menu = ({ open }) => (
  <nav className={open ? "open" : "hidden"}>
    <a>
      <Link className="animate__animated animate__fadeIn" to="/">
        Projects
      </Link>
    </a>
    <a>
      <Link className="animate__animated animate__fadeIn" to="/about">
        About
      </Link>
    </a>
    {/* <a>
      <Link className="animate__animated animate__fadeIn" to="/resume">
        Resume
      </Link>
    </a> */}
  </nav>
);
