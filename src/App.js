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
    kittens
  };

  selectKitten = id => {

  }

  render() {
    console.log(this.state.kittens)
    return (

      <Router>
        <div>
          <Navbar />
          <Jumbotron />
          <Wrapper>
            <Route exact path="/" component={""} />
            <div className="row mx-5">
              {this.state.kittens.map(kitten => (

                <ImageCard
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
