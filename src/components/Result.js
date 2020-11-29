import React from "react";

const Result = props => {
  const {city, err, temp, sunrise, sunset, pressure, wind} = props.weather

  return (
    <React.Fragment>
    <div>Pogoda dla: {city} </div>
    <div>Temperatura: {temp} </div>
    </ React.Fragment>
  );
}

export default Result;
