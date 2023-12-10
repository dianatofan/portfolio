import "../../styles/header/hamburger.scss";

import React from "react";

export const Burger = ({ open, setOpen }) => (
  <button className={open ? "open" : ""} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </button>
);
