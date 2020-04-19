import React, { useState } from "react";
import "../styles/header.scss";
import { Menu, X } from "react-feather";
import { Link, navigate } from "gatsby";

export default ({ location }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openHamburgerMenu = val => {
    setMenuOpen(!!val);
  };

  const activePage = (location && location.href) ? `/${location.href.split("/").slice(-1)}` : "/";

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate("/")}>lD</div>
      <ul className="navigation">
        <li className={activePage === "/" ? "active" : ""}><Link to="/">Home</Link></li>
        <li className={activePage === "/about" ? "active" : ""}><Link to="/about">About</Link></li>
        <li className={activePage === "/contact" ? "active" : ""}><Link to="/">Contact</Link></li>
      </ul>
      {
        isMenuOpen ? <X size={35} className="crossIcon" onClick={() => openHamburgerMenu()} /> : <Menu size={35} className="hamburgerMenu" onClick={() => openHamburgerMenu(true)} />
      }
    </header>
  )
}
