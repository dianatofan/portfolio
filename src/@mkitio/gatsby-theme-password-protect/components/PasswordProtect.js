/**
 * Write-only the password as cookie
 */
import React, { useState } from "react";
import "./PasswordProtect.scss";
import { Lock } from "react-feather";

const COOKIE_NAME = "gatsby-theme-password-protect";

const PasswordProtect = () => {
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    document.cookie = `${COOKIE_NAME}=${password}`;
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div className="wrapper animate__animated animate__fadeIn">
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
        />
        <button type="submit" className="submit-button">
          Let me in
        </button>
      </form>
    </div>
  );
};

export default PasswordProtect;
