import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Form from "./Form";
import Headline from "./Headline";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setName: ""
    };
  }

  render() {
    return (
      <div className="App">
        <Headline />
        <h2>Enter a new name!</h2>
        <Form />
      </div>
    );
  }
}

export default App;
