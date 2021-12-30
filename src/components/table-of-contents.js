import React, { useEffect, useCallback, useState } from "react";

import "../styles/table-of-contents.scss";

export default function TableOfContents({ links }) {
  const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="table-of-contents">
      {links.map((link) => (
        <li onClick={scrollToElement(link.id)}>{link.title}</li>
      ))}
    </ul>
  );
}
