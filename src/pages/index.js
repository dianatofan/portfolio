import "typeface-metropolis";
import React from "react";
import Helmet from "react-helmet";
import "animate.css";

import Content from "../components/content";
import Layout from "../components/layout";

import "../styles/index.scss";

export default function App({ location }) {
  const meta = [{ name: "robots", content: "noindex" }];
  return (
    <Layout location={location}>
      <Content />
      <Helmet meta={meta} />
    </Layout>
  );
}
