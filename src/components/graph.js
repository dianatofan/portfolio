import React from "react"
import "../styles/graph.scss"

export default () => {
  const colors = [
    "#C753D1",
    "#90288A",
    "#5d2962",
    "#722EC3",
    "#146dfb",
    "#1723B2",
  ]

  const createRow = width => {
    const items = []
    for (let i = 0; i < width; i++) {
      const binary1 = Math.round(Math.random())
      const binary2 = Math.round(Math.random())
      const borderRadius = `border${binary1 === 0 ? "Top" : "Bottom"}${
        binary2 === 0 ? "Left" : "Right"
      }Radius`
      const animations = ["rotateIn", "fadeInRight"];
      const randomElement = animations[Math.floor(Math.random() * animations.length)];
      items.push(
        <div
          className="square"
          style={{
            background: colors[Math.floor(Math.random() * colors.length)],
            [borderRadius]: "100%",
          }}
        />
      )
    }
    return <div className="row">{items}</div>
  }

  const WIDTH = 10
  const HEIGHT = 14

  const arr = Array.from(Array(HEIGHT).keys())

  return (
    <div className="graphWrapper">
      <div className="graph animate__animated animate__fadeInRight">{arr.map(() => createRow(WIDTH))}</div>
    </div>
  )
}
