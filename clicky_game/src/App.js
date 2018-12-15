import React, { Component } from 'react'
import Wrapper from './components/Wrapper/Wrapper'
import animals from './animals.json'
import AnimalCard from './components/AnimalCard/AnimalCard'
import Head from './components/Head/Head'

// Fisher-Yates algorithm 
function shuffle (array) {
  var currentIndex = array.length, temporaryValue, randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}


class App extends Component {

  state = {
    animals,
    currentScore: 0,
    highScore: 0,
    chosen: [],
  }

 handleShuffle = () => {
    let shuffled = shuffle(animals)
    this.setState({ animals: shuffled })
  }

  handleReset = () => {
      this.setState({
        currentScore: 0,
        highScore: this.state.highScore,
        chosen: []
      })
      this.handleShuffle()
    }

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1
    this.setState({
      currentScore: newScore,
    })
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore })
    }
    else if (newScore === 12) {
      this.setState({ correct: "You got them all right!" })
    }
    this.handleShuffle()
  }

  handleClick = name => {
    if (this.state.chosen.indexOf(name) === -1) {
      this.handleIncrement()
      this.setState({ chosen: this.state.chosen.concat(name), correct: "Nice pick!" })
    } else {
      this.handleReset()
      this.setState({ correct: "Sorry you already picked that!" })
    }
  }

  render() {
    return (
      <Wrapper>
        <Head
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          correct={this.state.correct}
        />
      {this.state.animals.map(animal => (
        <AnimalCard
          id={animal.id}
          key={animal.id}
          name={animal.name}
          image={animal.image}
          science={animal.science}
          status={animal.status}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handleShuffle={this.handleShuffle}
          handleClick={this.handleClick}
        />
      ))}
    </Wrapper>
    )
  }
}

export default App
