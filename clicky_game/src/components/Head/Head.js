import React from "react"
import "./Head.css"

const Head = props => (
  <nav>
    <ul>
      <li>
        <p>Animal Clicky Game!</p>
      </li>
      <li>Current Score: { props.currentScore }</li>
      <li>High Score: { props.highScore }</li>
      <li> { props.correct }</li>
    </ul>
  </nav>
)

export default Head