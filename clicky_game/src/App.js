import React, { Component } from 'react'
import Wrapper from './components/Wrapper/Wrapper'
import animals from './animals.json'
import AnimalCard from './components/AnimalCard/AnimalCard'
import Head from './components/Head/Head'

// Fisher-Yates algorithm 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
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


  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement()
      this.setState({ clicked: this.state.chosen.concat(id) })
    } else {
      this.handleReset()
    }
  }

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1
    this.setState({
      currentScore: newScore,
      correctIncorrect: "You guessed correctly!"
    })
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore })
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" })
    }
    this.handleShuffle()
  }

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      correct: "Sorry, you guessed incorrectly!",
      clicked: []
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
          handleShuffle={this.handleShuffle}
        />
      ))}
    </Wrapper>
    )
  }
}

export default App
