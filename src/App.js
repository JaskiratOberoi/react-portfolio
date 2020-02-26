import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./CSS/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="conatiner">
        <Navbar />
        <Route exact path='/' render = {props=> ( 
        <React.Fragment>
          <Hero />
        </React.Fragment> 
        )} />
        </div>
      </Router>
    );
  }
}

export default App;
