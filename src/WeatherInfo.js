import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="overview">
      <h1 id="city">{props.data.cityName}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li id="description">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={props.data.icon}
              alt={props.data.description}
              id="icon"
              class="float-left"
            />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              pressure: <span id="pressure">{props.data.pressure}</span>
              hPa
            </li>
            <li>
              humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
