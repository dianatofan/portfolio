import React, { useEffect, useCallback, useState } from "react";

import { ChevronUp, ChevronDown } from "react-feather";

export default function ScrollToTopButton() {
  const style = {
    cursor: "pointer",
    position: "fixed",
    right: "6vw",
    bottom: "40px",
    zIndex: 999,
    background: "#373737",
    borderRadius: "50%",
    padding: "4px",
  };
  const [isPageAtTheTop, setPageAtTop] = useState(true);

  const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    let scrollPosition = window.pageYOffset;
    if (scrollPosition > 0) {
      setPageAtTop(false);
    } else {
      setPageAtTop(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return isPageAtTheTop ? (
    <ChevronDown
      size={32}
      color="#fff"
      style={style}
      onClick={() => scrollToElement("footer")}
    />
  ) : (
    <ChevronUp
      size={32}
      color="#fff"
      style={style}
      onClick={() => scrollToElement("header")}
    />
  );
}
