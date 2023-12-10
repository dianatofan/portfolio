import "../styles/PasswordProtect.scss";

import { ArrowLeft, Lock } from "react-feather";
import React, { useEffect, useState } from "react";

import Header from "../components/header/header";
import { Link } from "gatsby";
import Torus from "./torus";

const COOKIE_NAME = "gatsby-theme-password-protect";

const PasswordProtect = ({ children }) => {
  const [password, setPassword] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  useEffect(() => {
    localStorage.setItem("loggedIn", passwordCorrect);
  }, [passwordCorrect]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (password === process.env.GATSBY_ACCESS_KEY) {
      setPasswordCorrect(true);
    } else {
      document.getElementById("button").classList.add("animate__shakeX");
      setTimeout(function () {
        document.getElementById("button").classList.remove("animate__shakeX");
      }, 1000);
      setPasswordCorrect(false);
    }
  };

  return (
    <>
      {passwordCorrect || localStorage.getItem("loggedIn") === "true" ? (
        <>{children}</>
      ) : (
        <>
          <Header location={location} />
          <div className="password-protected-page animate__animated animate__fadeIn">
            {/* <img src={squiggle} alt="" className="squiggle" /> */}
            <Lock width={40} height={40} strokeWidth={1.5} color="#000" />
            <div className="text">This content is protected</div>
            <form onSubmit={onSubmit}>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="input"
                id="input"
              />
              <button
                type="submit"
                className="submit-button animate__animated"
                id="button"
              >
                Enter
              </button>
              <div className="return-button">
                <ArrowLeft
                  width={20}
                  height={20}
                  color="#000"
                  strokeWidth={1.5}
                />
                <Link to="/">Go back</Link>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default PasswordProtect;
