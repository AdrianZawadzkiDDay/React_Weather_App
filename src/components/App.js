import React from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

class App extends React.Component {
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: ''
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    console.log("Potwierdzony");

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=5f5bc434b19388d376011cbda820fc7d`;

    fetch(API)
    .then(response => console.log(response))
    .catch(err => console.log(err))

  }

  render() {
    return (
      <div>
        Aplikacja pogodowa
        <Form
         value={this.state.value} 
         change={this.handleInputChange}
         submit={this.handleCitySubmit} />

        <Result />
      </div>
    );
  }
}

export default App;
