import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      number1: 0,
      number2: 0,
      num: null
    };
  }
  addMe() {
    var { number1, number2, num } = this.state;
    num = Number(number1) + Number(number2);
    this.setState({
      num: num
    });
  }
  render() {
    console.log(this.state.number2);
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={e => {
            this.setState({ number1: e.target.value });
          }}
        />
        <input
          className="inputLine"
          onChange={e => {
            this.setState({
              number2: e.target.value
            });
          }}
        />
        <button className="confirmationButton" onClick={() => this.addMe()}>
          Add
        </button>
        <span className="resultsBox">={this.state.num}</span>
      </div>
    );
  }
}
export default Sum;
