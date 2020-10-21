import React, {Component} from "react";

class ResyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0,
    };
  }

  render() {
    return <>
      <input onChange={this.changeState} type="text" name="name" />
      <input onChange={this.changeState} type="text" name="date" />
      <input onChange={this.changeState} type="text" name="time" />
      <input onChange={this.changeState} type="number" name="number" />
      <button onSubmit={this.props.postResy} type="submit" value="submit">Make a Reservation</button>
    </>;
  }
}
export default ResyForm;
