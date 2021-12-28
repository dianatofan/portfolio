import Img from "gatsby-image"
import React from "react"

export default ({ image, caption }) => (
  <div>
    <Img
      fluid={{ ...image, aspectRatio: 1 }}
      style={{
        margin: "20px 20px 20px 0",
        border: "solid 20px white",
        borderTopWidth: "40px",
        borderBottomWidth: "80px",
        boxShadow: "0 4px 4px 1px rgba(34, 52, 88, 0.15)",
      }}
    />
    <figcaption className="caption">{caption}</figcaption>
  </div>
)
