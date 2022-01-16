/**
 * Write-only the password as cookie
 */
import React, { useState } from "react";
import "./PasswordProtect.scss";
import { Lock } from "react-feather";

const COOKIE_NAME = "gatsby-theme-password-protect";

const PasswordProtect = () => {
  const [password, setPassword] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (password === process.env.ACCESS_KEY) {
      document.cookie = `${COOKIE_NAME}=${password}`;
      setPasswordCorrect(true);
      window.location.reload(); // eslint-disable-line
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
      {passwordCorrect ? null : (
        <div className="password-protected-page animate__animated animate__fadeIn">
          <Lock width={60} height={60} />
          <h1>This content is protected</h1>
          <form onSubmit={onSubmit}>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
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
              Let me in
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default PasswordProtect;
