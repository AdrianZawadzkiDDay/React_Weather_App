import React from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends React.Component {
  state = {
    value: "",
  };

  handleInputChange = () => {};

  render() {
    return (
      <div>
        Aplikacja pogodowa
        <Form value={this.state.value} />
        <Result />
      </div>
    );
  }
}

export default App;
