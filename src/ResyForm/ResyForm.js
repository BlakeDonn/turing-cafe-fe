import React, {Component} from "react";

class ResyForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0,
    };
    this.baseState = this.state
  }
  changeState = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitResy = (e) => {
    this.props.updateResys(this.state)
    this.setState(this.baseState)
  }

  render() {
    return <>
      <input onChange={this.changeState} value={this.state.name} placeholder="name" type="text" name="name" />
      <input onChange={this.changeState} value={this.state.date} placeholder="date" type="text" name="date" />
      <input onChange={this.changeState} value={this.state.time} placeholder="time" type="text" name="time" />
      <input onChange={this.changeState} value={this.state.number} placeholder="number" type="number" name="number" />
      <button onClick={this.submitResy} type="submit">Make a Reservation</button>
    </>;
  }
}
export default ResyForm;
