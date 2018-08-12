import React, { Component } from "react";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = { city: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    console.log("thisd", this);
    this.setState({ city: e.target.value });
  }

  handleClick(e) {
    console.log(e);
    console.log("this", this);
    if (this.state.city === "") return;
    this.props.selectedCity(this.state.city);
    this.setState({ city: "" });
  }

  getData() {
    axios.get
  }

  render() {
    return (
      <div className="User__Input">
        <input onChange={this.handleInput} />
        <button onClick={this.handleClick}>Get Weather Data</button>
      </div>
    );
  }
}

export default UserInput;
