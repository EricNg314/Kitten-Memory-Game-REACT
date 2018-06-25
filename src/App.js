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
    top_score: 0,
    old_top_score: 0,
    message: ""
  };


  selectKitten = id => {
    let message = this.state.message;
    let score = this.state.score;
    let top_score = this.state.top_score;
    let old_top_score = this.state.old_top_score;
    let kitten = this.state.kittens.filter(kitten => kitten.id === id)[0];
    // console.log("selected kitten", kitten);
    // console.log(`id: ${id}`);

    if (kitten.selected === false) {
      //preparing for different scorings
      message = "";
      score += 1;
      // this.setState({ score: this.state.score + 1 });
      // setTimeout(() => console.log(this.state.score), 100);
      // console.log(kitten);

      if(top_score < score) {
        top_score = score;
      }

      kitten.selected = true;

      this.setState({ score, top_score, message, kittens: this.shuffle(this.state.kittens) });

    } else {
      this.endGame();

    }
  };

  endGame = () => {
    let top_score = this.state.top_score;
    let old_top_score = this.state.old_top_score;
    let score = this.state.score;
    let message = this.state.message;

    if(old_top_score < top_score){
      old_top_score = top_score;
      message = `Wow new high score ${old_top_score}`
    } else {
      message = "Sorry try again."
    }


    score = 0;
    this.state.kittens.map((kitten, index) => {
      return kitten.selected = false;
      // this.state.kittens[index].selected = false;

    })
    this.setState({ score, top_score, old_top_score, message })
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
    return (
      <Router>
        <div>
          <Navbar score={this.state.score} top_score={this.state.top_score} />
          <Jumbotron />
          <div>
            <h2>{this.state.message}</h2>
          </div>
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
