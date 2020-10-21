import React, {Component} from "react";
import {getAllReservations, postReservation} from "../api.js";
import {ResyContainer} from "../ResyContainer/ResyContainer";
import ResyForm from "../ResyForm/ResyForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: {},
    };
  }
  componentDidMount = async () => {
    const reservations = await getAllReservations();
    this.setState({reservations});
  };
  postResy = async (resy) => {
    const newReservation = await postReservation();
    this.setState({});
  };
  updateResys = (e) => {
    console.log(e.target.value)

  };
  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <ResyForm updateResys={this.updateResys} />
        </div>
        <div className="resy-container">
          <ResyContainer reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
