import React from 'react';
import "../../styles/header/hamburger.scss";

export  const Burger = ({ open, setOpen }) =>
    <button className={open ? "open" : "hidden"} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </button>;
