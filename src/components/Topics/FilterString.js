import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: ["Joseph", "Jacob", "Aaron", "Jarid"],
      userInput: "",
      filteredArray: []
    };
  }
  filterMe() {
    var { unFilteredArray, filteredArray, userInput } = this.state;
    filteredArray = unFilteredArray.filter((el, index, array) => {
      return el.includes(userInput);
    });
    this.setState({
      filteredArray: filteredArray
    });
  }
  render() {
    // console.log(this.state.userInput);
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names:
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => {
            this.setState({ userInput: e.target.value });
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.filterMe();
          }}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names:{JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}
export default FilterString;
