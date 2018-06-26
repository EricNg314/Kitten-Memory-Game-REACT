import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import ModalEnd from "./components/ModalEnd";
import Footer from "./components/Footer";

import kittens from "./kittens.json";
import './App.css';

class App extends Component {

  state = {
    kittens,
    score: 0,
    top_score: 0,
    old_top_score: 0,
    message: "",
    showModal: "d-none"
  };


  selectKitten = id => {
    let message = this.state.message;
    let score = this.state.score;
    let top_score = this.state.top_score;
    let kitten = this.state.kittens.filter(kitten => kitten.id === id)[0];

    if (kitten.selected === false) {
      //preparing for different scorings
      message = "";
      score += 1;

      if (top_score < score) {
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
    let showModal = this.state.showModal;

    showModal = "d-inline";

    if (old_top_score < top_score) {
      old_top_score = top_score;
      message = `Wow you adopted more kittens than before! New record: ${top_score}!`
    } else {
      message = "Hope you adopt more next time."
    }


    score = 0;
    this.state.kittens.map((kitten, index) => {
      return kitten.selected = false;

    })

    this.setState({ score, top_score, old_top_score, message, showModal })
  }

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;

  }

  closeModal = () => {
    this.setState({ showModal: "d-none" })
  }


  render() {
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
          <ModalEnd display={" " + this.state.showModal} closeModal={this.closeModal} message={this.state.message} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
