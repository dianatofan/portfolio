import "typeface-metropolis";
import "animate.css";
import "../styles/index.scss";

import Content from "../components/content";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import React from "react";

export default function App({ location }) {
  const meta = [{ name: "robots", content: "noindex" }];
  return (
    <Layout location={location}>
      <Content />
      <Helmet meta={meta} />
    </Layout>
  );
}
