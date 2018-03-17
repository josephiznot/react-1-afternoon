import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArr: [],
      oddArr: [],
      userInput: ""
    };
  }
  problemSolver() {
    var { userInput } = this.state;
    userInput = userInput.split(",");
    userInput = userInput.map((el, index, arr) => {
      return Number(el);
    });
    var evens = userInput.filter((el, index, arr) => {
      return el % 2 === 0;
    });
    var odds = userInput.filter((el, index, arr) => {
      return el % 2 !== 0;
    });
    this.setState({
      evenArr: evens,
      oddArr: odds,
      userInput: userInput
    });
  }
  render() {
    console.log(this.state.userInput[1]);
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => {
            this.setState({ userInput: e.target.value });
          }}
          placeholder="Enter some numbers"
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.problemSolver();
          }}
        >
          Solve
        </button>
        <span className="resultsBox">
          Evens [ {this.state.evenArr.toString(", ")} ]
        </span>
        <span className="resultsBox">
          Odds [ {this.state.oddArr.toString(", ")} ]
        </span>
      </div>
    );
  }
}
export default EvenAndOdd;
