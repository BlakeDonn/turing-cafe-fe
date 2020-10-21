import React, {Component} from "react";
import {getAllReservations} from "../api.js";
import "./App.css";

class App extends Component {
  componentDidMount = async () => {
    const response = await getAllReservations();
    console.log(response)
  };
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        <div className="resy-container"></div>
      </div>
    );
  }
}

export default App;
