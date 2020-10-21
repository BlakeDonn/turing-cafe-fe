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
      <input type="text" name="name" />
      <input type="text" name="date" />
      <input type="text" name="time" />
      <input type="number" name="number" />
      <button type="submit" value="submit">Make a Reservation</button>
    </>;
  }
}
export default ResyForm;
