import React from "react";
import "./Head.css";

const Head = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <p>Animal Clicky Game!</p>
      </li>
      <li>Current Score: {props.score} </li>
      <li>Top Score: {props.highScore}</li>
    </ul>
  </nav>
);

export default Head;