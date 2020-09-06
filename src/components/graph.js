import React, { useState, useEffect } from "react";
import "../styles/graph.scss";

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default () => {
  const colors = [
    "#C753D1",
    "#a046a7",
    "#5d2962",
    "#722EC3",
    "#146dfb",
    "#1723B2",
    "#223458"
  ];

  const createRow = width => {
    const items = [];
    for (let i = 0; i < width; i++) {
      const binary1 = Math.round(Math.random());
      const binary2 = Math.round(Math.random());
      const borderRadius = `border${binary1 === 0 ? "Top" : "Bottom"}${binary2 === 0 ? "Left" : "Right"}Radius`;
      items.push(
        <div
          className="square"
          style={{
            background: colors[Math.floor(Math.random() * colors.length)],
            [borderRadius]: "100%"
          }}
        />
        );
    }
    return (
      <div className="row">
        { items }
      </div>
    )
  };

  const size = useWindowSize();
  const windowSize = window.screen.width < 767;

  const WIDTH = size.width < 767 ? (size.width / 36) : 10;
  const HEIGHT = size.width < 767 ? 10 : 14;

  const arr = Array.from(Array(HEIGHT).keys());

  return (
    <div>
      { arr.map(() => createRow(WIDTH)) }
    </div>
  )
}
