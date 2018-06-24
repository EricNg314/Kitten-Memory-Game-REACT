import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import Jumbotron from "./components/Jumbotron";
import logo from './logo.svg';
import './App.css';

const App = () => (

  <Router>
     <div>
      <Navbar />
      <Jumbotron />
      <Wrapper>
      <Route exact path="/" component={Home}/>
      </Wrapper>
    </div>
  </Router>
);



export default App;
