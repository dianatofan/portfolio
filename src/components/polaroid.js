import React from "react"
import Img from "gatsby-image"

export default ({ image, caption }) => (
  <div>
    <Img
      fluid={{ ...image, aspectRatio: 1 }}
      style={{
        margin: "20px 20px 20px 0",
        border: "solid 20px white",
        borderTopWidth: "40px",
        borderBottomWidth: "80px",
        filter: "drop-shadow(0 4px 4px rgba(34, 52, 88, 0.2))",
      }}
      imgStyle={{ objectFit: "contain", width: "auto" }}
    />
    <figcaption className="caption">{caption}</figcaption>
  </div>
)
