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

    let kitten = this.state.kittens[id-1];

    console.log(`id: ${id}`);
    // console.log(kittens);
    // console.log(kitten);

    if (kitten.selected == false) {
      this.setState({ score: this.state.score +1});
      // setTimeout(() => console.log(this.state.score), 100);
     
      kitten.selected = true;
      // console.log(kitten);
    } else {
      this.endGame();
    }
  };

  endGame = () => {
    if(this.state.top_score < this.state.score){
      this.setState({ top_score: this.state.score});
    }
    console.log("End game.")
  }

  shuffle = () => {
    console.log("shuffled");
  }

  render() {
    // console.log(this.state.kittens)
    return (

      <Router>
        <div>
          <Navbar score={this.state.score} top_score ={this.state.top_score}/>
          <Jumbotron />
          <Wrapper>
            <Route exact path="/" component={""} />
            <div className="row mx-5">
              {this.state.kittens.map(kitten => (

                <ImageCard
                  selectKitten={this.selectKitten}
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
