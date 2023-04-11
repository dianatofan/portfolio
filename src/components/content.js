import "../styles/content.scss";
import "../styles/header/header.scss";
import "animate.css";

import * as random from "maath/random/dist/maath-random.esm";

import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useRef, useState } from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";
import Blob from "./blob";
import Card from "./card";

export default function Content() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = (event) => {
      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

      setScrollTop(scrollTop);
      console.log(scrollTop);
      document.getElementById("scroll-to-explore").style.opacity =
        1 - scrollTop / 400;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = useStaticQuery(graphql`
    query {
      racefinder: file(relativePath: { eq: "thumbnail1.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 520, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      timeseries: file(relativePath: { eq: "thumbnail4.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 520, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      sustainability: file(relativePath: { eq: "thumbnail3.png" }) {
        childImageSharp {
          fluid(maxWidth: 700, maxHeight: 520, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <div className="container">
      <Blob />
      <div className="content front-page">
        <AnimationOnScroll animateIn="animate__fadeIn">
          <div className="introText">
            Hey! I'm Diana, a UX designer with frontend superpowers. I love
            brainstorming ideas and bringing them to life.
            <span className="role" id="scroll-to-explore">
              Scroll to explore <div className="icon-scroll" />
            </span>
          </div>
        </AnimationOnScroll>
        <section className="past-work animate__animated animate__fadeIn animate__delay-1s">
          <div className="projects-grid">
            <Card
              title="Racefinder App"
              description="Optimizing the racebooking process to help runners find their next race easier"
              role="UX/UI DESIGN | USER RESEARCH"
              image={data.racefinder.childImageSharp.fluid}
              url="racefinder"
            />
            <Card
              title="Sustainable E-Commerce"
              description="Reimagining the checkout flow to reduce packaging waste in online orders"
              role="UX/UI DESIGN | USER RESEARCH"
              image={data.sustainability.childImageSharp.fluid}
              url="sustainability"
            />
            <Card
              title="Visual Exploration of Time Series in Healthcare"
              description="Generate medical charts given patient data"
              role="DATA VISUALIZATION | UX/UI DESIGN"
              image={data.timeseries.childImageSharp.fluid}
              url="time-series"
            />
          </div>
        </section>
      </div>
      {/* <Footer /> */}

      {/* <h2 className="banner">COMING SOON</h2> */}
    </div>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
