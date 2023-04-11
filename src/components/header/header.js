import "../../styles/header/header.scss";
import "animate.css";

import { Link, navigate } from "gatsby";
import { Menu as MenuIcon, X } from "react-feather";
import React, { useState } from "react";

import { Burger } from "./hamburger";
import { Menu } from "./menu";
import logo from "../../images/logos/logoNew.svg";

export default ({ location }) => {
  const [isOpen, setOpen] = useState(false);

  const activePage = location?.pathname;

  return (
    <header className="header animate__animated animate__fadeIn" id="header">
      <div>
        <img
          src={logo}
          className={`logo ${isOpen ? "white" : ""}`}
          alt=""
          onClick={() => navigate("/")}
        />
        <ul className="navigation">
          <li className={activePage === "/" ? "active" : ""}>
            <Link to="/">Projects</Link>
          </li>
          <li
            className={
              activePage === "/about" || activePage === "/about/"
                ? "active"
                : ""
            }
          >
            <Link to="/about">About</Link>
          </li>
          {/* <li className={activePage === "/resume" || activePage === "/resume/" ? "active" : ""}>
            <Link to="/resume">Resume</Link>
          </li> */}
        </ul>
        <div className="burgerMenuNavigation">
          <Burger open={isOpen} setOpen={setOpen} />
          <Menu open={isOpen} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};
