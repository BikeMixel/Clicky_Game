import React from "react"
import "./Head.css"

const Head = props => (
  <nav>
    <ul>
      <li>Score: { props.currentScore }</li>
      <li> { props.correct }</li>
      <li>High Score: { props.highScore }</li>
    </ul>
  </nav>
)

export default Head