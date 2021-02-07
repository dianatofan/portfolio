import React from "react"
import "../styles/graph.scss"

export default () => {
  const colors = [
    "#C753D1",
    "#a046a7",
    "#5d2962",
    "#722EC3",
    "#146dfb",
    "#1723B2",
    // "#223458",
    // "#8B4AFF",
    // "#5654FF",
    // "#C354FF",
    // "#ff7171",
  ]

  const createRow = width => {
    const items = []
    for (let i = 0; i < width; i++) {
      const binary1 = Math.round(Math.random())
      const binary2 = Math.round(Math.random())
      const borderRadius = `border${binary1 === 0 ? "Top" : "Bottom"}${
        binary2 === 0 ? "Left" : "Right"
      }Radius`
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
      <div className="graph">{arr.map(() => createRow(WIDTH))}</div>
    </div>
  )
}
