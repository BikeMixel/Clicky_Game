import React from 'react'
import './Title.css'

const Title = () => (
    <header className="Jumbotron">
    <h1 className="animated slower tada infinite">Animal Clicky Game!</h1>
    <h3>Click on an Animal Card to score a point, but don't click an image more than <p className="special-p animated slower tada infinite">ONCE!</p></h3> <h2 className="special-h2">Score 12 in a row to win. </h2>
    </header>
)

export default Title