import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { TimelineLite, Back, gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import "../styles/graph.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CSSPlugin);
}

export default () => {
  const [squares, setSquares] = useState([]);
  const colors = [
    "#C753D1",
    "#90288A",
    "#5d2962",
    "#722EC3",
    "#146dfb",
    "#1723B2",
  ];
  const WIDTH = 10;
  const HEIGHT = 14;

  useEffect(() => {
    const arr = Array.from(Array(HEIGHT).keys());
    setSquares(arr);
  }, []);

  useEffect(() => {
    draw();
  }, []);

  const data = [
    {
      year: 2019,
      capacity: 61500,
      boxes: 140,
    },
  ];

  const draw = () => {
    const uncount = (data, accessor) =>
      data.reduce((arr, item) => {
        const count = accessor(item);
        for (let i = 0; i < count; i++) {
          arr.push({
            ...item,
          });
        }
        return arr;
      }, []);

    const boxes = uncount(data, d => d.boxes);

    const nest = d3.group(boxes, d => d.venue);

    const graph = d3.select(".chart");
    const group = graph
      .selectAll(".container")
      .data(nest)
      .join("div")
      .attr("class", "container");

    group
      .selectAll(".box")
      .data(d => d[1])
      .join("rect")
      .style(
        "background-color",
        d => colors[Math.floor(Math.random() * colors.length)]
      )
      .attr("class", () => {
        const binary1 = Math.round(Math.random());
        const binary2 = Math.round(Math.random());
        return `box border${binary1 === 0 ? "Top" : "Bottom"}${
          binary2 === 0 ? "Left" : "Right"
        }Radius`;
      });
  };

  const animation = new TimelineLite({ paused: false });
  animation.staggerTo(".box", 1, {
    scale: 1,
    ease: Back.easeOut,
    stagger: {
      grid: "auto",
      from: "start",
      axis: "x",
      each: 0.08,
    },
  });

  return <div className="chart" />;
};
