import React from "react";

const Result = props => {
  const {city, err, temp, sunrise, sunset, pressure, wind, date} = props.weather

  let content = null

  if(!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <div>
        <h3>Pogoda dla: <strong> {city} </strong></h3>
        <h4>Dane dla nie i godziny: {date}</h4>
        <h4>Aktualna temperatura: {(temp - 273).toFixed(1)}</h4>
        <h4>Wschód słońca: {sunriseTime}</h4>
        <h4>Zachód słońca: {sunsetTime}</h4>
        <h4>Ciśnienie: {pressure} hPa</h4>
        <h4>Wiatr: {wind} m/s</h4>

      </div>
    )
  }

  return (
    <React.Fragment>
    <div className="result">
      {err ? `Nie mamy w bazie: ${city}` : content}
    </div>
    </ React.Fragment>
  );
}

export default Result;
