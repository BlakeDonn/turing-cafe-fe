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
    console.log(props)
  }
  changeState = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return <>
      <input onChange={this.changeState} type="text" name="name" />
      <input onChange={this.changeState} type="text" name="date" />
      <input onChange={this.changeState} type="text" name="time" />
      <input onChange={this.changeState} type="number" name="number" />
      <button onClick={this.props.updateResys} type="submit" value={this.state}>Make a Reservation</button>
    </>;
  }
}
export default ResyForm;
