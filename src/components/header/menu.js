import React from 'react';
import "../../styles/header/menu.scss";
import { Link, navigate } from "gatsby";

export const Menu = ({ open }) =>
  <nav className={open ? "open" : "hidden"}>
    <a>
      <Link to="/">
        Home
      </Link>
    </a>
    <a>
      <Link to="/about">
        About
      </Link>
    </a>
    <a>
      <Link to="/about">
        Contact
      </Link>
    </a>
  </nav>
