import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }
  checkMe() {
    var { userInput } = this.state;

    var reversedInput = userInput
      .split("")
      .reverse()
      .join("");
    var isTrue = userInput === reversedInput;
    this.setState({
      palindrome: isTrue
    });
  }
  render() {
    console.log(this.state.userInput);
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => {
            this.setState({ userInput: e.target.value });
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.checkMe();
          }}
        >
          Check
        </button>
        <span className="resultsBox">
          Palindrome:{JSON.stringify(this.state.palindrome)}
        </span>
      </div>
    );
  }
}
export default Palindrome;
