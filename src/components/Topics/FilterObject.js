import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        { name: "Dexter", breed: "Pomeranian", favFood: "whipped cream" },
        { name: "Joe", occupation: "coding", favFood: "Chinese" },
        { name: "Carrie", occupation: "marketing", sport: "Lacrosse" }
      ],
      userInput: "",
      filteredArray: []
    };
  }
  solveMe() {
    var { userInput, unFilteredArray, filteredArray } = this.state;
    filteredArray = unFilteredArray.filter((element, index, array) => {
      return element[userInput];
    });
    this.setState({
      filteredArray: filteredArray
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original:
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => {
            this.setState({ userInput: e.target.value });
          }}
          placeholder="Enter an object property"
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.solveMe();
          }}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered:
          {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
export default FilterObject;
