import React from "react"
import './AnimalCard.css'

const AnimalCard = props => (
  <div className="card"
      value={props.name} 
      onClick={() => props.handleClick(props.name)}
  >
    <div className="img-container">
      <img className="img-fluid" alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Common Name:</strong> {props.name}
        </li>
        <li>
          <strong>Genus:</strong> {props.genus}
        </li>
        <li>
          <strong>Scientific Name:</strong> {props.science}
        </li>
        <li>
          <strong>Consevation Status:</strong> {props.status}
        </li>

      </ul>
    </div>
  </div>
)

export default AnimalCard