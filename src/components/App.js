import React from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

// key for api
const APIKey = '5f5bc434b19388d376011cbda820fc7d';

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

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`;

    fetch(API)
    .then(response => {
      if(response.ok) {
        return response
      }
      throw Error("nie pobrano")
    })
    .then(response => response.json())
    .then(data => {
      const time = new Date().toLocaleString()
      this.setState(prevState => ({
        date: time,
        city: prevState.value,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        err: false
      }))
    })
    .catch(err => {
      console.log(err)})
      this.setState(state => ({
        err: true,
        city: state.value
      }))
  }

  render() {

    return (
      <div>
        Aplikacja pogodowa
        <Form
         value={this.state.value} 
         change={this.handleInputChange}
         submit={this.handleCitySubmit} />

        <Result weather = {this.state} />
      </div>
    );
  }
}

export default App;
