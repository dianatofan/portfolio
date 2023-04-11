import "../styles/index.scss";

import { motion, useScroll, useSpring } from "framer-motion";

import Footer from "./footer";
import Header from "./header/header";
import React from "react";

export default ({ location, children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="layout">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header location={location} />
      {children}
      <Footer />
    </div>
  );
};
