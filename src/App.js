import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: []
  };
  //In the App component, write an addName method that
  //will add a new name to the names array in state.
  addName = (name) => {
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames });
  };
  removeName = (clickedIndex) => {
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };
  /*The names array will need to be saved to local storage, so the array of 
name tags is saved when a user closes the UI. To save the names array, 
write an empty componentDidUpdate method that you’ll add to in the next 
few steps.*/
  componentDidMount() {
    /*Now that your state is saved to local storage, write a componentDidMount 
method to read from local storage. In the componentDidMount method, write 
a variable called savedNamesString that pulls the ‘savedNames’ data from 
local storage, if there’s any data there.*/
    const savedNamesString = localStorage.getItem("savedNames");
    /*Write an “if” statement that checks to see if savedNamesString exists in local storage.*/
    /*Inside of the “if” statement, you need to parse the stringified version 
of the names array by writing: const savedNames = JSON.parse(savedNamesString)*/

    if (savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames });
    }
  }
  /*The names array needs to be stringified before writing it to local 
storage. Note: this would only be unnecessary if we were storing a simple 
string value. To stringify the names array, write the following in the 
componentDidUpdate method: const savedNamesString = JSON.stringify(this.state.names);*/
  componentDidUpdate() {
    const savedNamesString = JSON.stringify(this.state.names);
    /*Below savedNameString in the componentDidUpdate method, save state to 
local storage, naming it ‘savedNames’. Hint: Since you set the value of 
savedNamesString to be a stringified version of state, you should save 
savedNamesString to local storage.*/
    localStorage.setItem("savedNames", savedNamesString);
  }
  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <UserInput addName={this.addName} />
        <NameTagList names={this.state.names} removeName={this.removeName} />
      </div>
    );
  }
}

export default App;
