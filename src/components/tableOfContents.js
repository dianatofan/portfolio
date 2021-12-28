import React, { useRef } from "react"

import "../styles/tableOfContents.scss"

export default ({ sections }) => {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()

  return (
    <div className="tableOfContents">
      {sections.map(section => (
        <button onClick={executeScroll}> Click to scroll </button>
      ))}
    </div>
  )
}
