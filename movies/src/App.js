import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./component/Navbar"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <NavBar />
      </BrowserRouter>
     
    );
  }
}

export default App;
