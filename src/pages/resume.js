import React from "react"
import "../styles/about.scss"
import Layout from "../components/layout"
import "../styles/resume.scss"
import resume from "../images/resume.png"

export default ({ location }) => (
  <Layout location={location}>
    <div className="resume-container">
      <iframe
        allowTransparency={true}
        frameBorder={0}
        src="https://drive.google.com/file/d/19KlBRcKq3WN-bCSdJV2ueb1uRRPYt4BK/preview"
        width="640"
        height="480"
      />
    </div>
  </Layout>
)
