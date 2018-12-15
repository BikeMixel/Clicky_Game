import React, { Component } from 'react'
import Wrapper from './components/Wrapper/Wrapper'
import animals from './animals.json'
import AnimalCard from './components/AnimalCard/AnimalCard'
import Head from './components/Head/Head'

// Fisher-Yates algorithm 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


class App extends Component {

  state = {
    animals,
    currentScore: 0,
    highScore: 0,
    correct: "",
    chosen: [],
  }


  handleClick = name => {
    if (this.state.chosen.indexOf(name) === -1) {
      this.handleIncrement()
      this.setState({ chosen: this.state.chosen.concat(name) })
    } else {
      this.handleReset()
    }
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
      this.setState({ correct: "You win!" })
    }
    this.handleShuffle()
  }

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      correct: "Sorry, you guessed incorrectly!",
      chosen: []
    })
    this.handleShuffle()
  }

  handleShuffle = () => {
    let shuffled = shuffle(animals)
    this.setState({ animals: shuffled })
  }

  render() {
    return (
      <Wrapper>
        <Head />
      {this.state.animals.map(animal => (
        <AnimalCard
          id={animal.id}
          key={animal.id}
          name={animal.name}
          image={animal.image}
          family={animal.family}
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
