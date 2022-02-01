import React from "react";

import Layout from "../components/layout";

import "../styles/resume.scss";

export default ({ location }) => (
  <Layout location={location}>
    <div className="resume-container">
      <iframe
        allowTransparency={true}
        frameBorder={0}
        src="https://drive.google.com/file/d/1HfLD1kIx7qfiOOs5WX4CnjWrXSnMsZeq/preview"
        width="640"
        height="480"
      />
    </div>
  </Layout>
);
