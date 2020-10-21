import React, {Component} from "react";
import {getAllReservations} from "../api.js";
import {ResyContainer} from "../ResyContainer/ResyContainer";
import "./App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      reservations: {},
    };
  }
  componentDidMount = async () => {
    const reservations = await getAllReservations();
    this.setState({reservations});
  };
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form"></div>
        <div className="resy-container">
          <ResyContainer reservation={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
