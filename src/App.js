import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import kittens from "./kittens.json";
import ImageCard from "./components/ImageCard";

import './App.css';

class App extends Component {

  state = {
    kittens,
    score: 0,
    top_score: 0
  };


  selectKitten = id => {
    let score = this.state.score;
    let kitten = this.state.kittens.filter(kitten => kitten.id === id)[0];
    // console.log("selected kitten", kitten);
    // console.log(`id: ${id}`);

    if (kitten.selected === false) {
      //preparing for different scorings
      score += 1;
      // this.setState({ score: this.state.score + 1 });
      setTimeout(() => console.log(this.state.score), 100);
      // console.log(kitten);

      kitten.selected = true;

      this.setState({score, kittens: this.shuffle(this.state.kittens)});

    } else {
      this.endGame();

    }
  };

  endGame = () => {
    let top_score = this.state.top_score;
    let score = this.state.score;

    if (this.state.top_score < this.state.score) {
      top_score = score;
      // this.setState({ top_score: this.state.score });
    }

    // this.state.score = 0;
    score = 0;
    this.state.kittens.map((kitten, index) => {
      return kitten.selected = false;
      // this.state.kittens[index].selected = false;

    })
    this.setState({score, top_score})
  }

  shuffle = array => {
    // console.log("shuffled");

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;

  }

  render() {
    // console.log(this.state.kittens)
    return (
      <Router>
        <div>
          <Navbar score={this.state.score} top_score={this.state.top_score} />
          <Jumbotron />
          <Wrapper>

            <div className="row mx-5">
              {this.state.kittens.map((kitten, index) => (
                <ImageCard
                  key={index}
                  selectKitten={this.selectKitten}
                  index={index}
                  id={kitten.id}
                  image={kitten.image}
                />
              ))}
            </div>
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
