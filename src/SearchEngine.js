import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";

export default function SearchEngine() {
  let [city, setCity] = useState("Lviv", "");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      pressure: response.data.main.pressure,
      cityName: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let api = "4a6d5a2213f3c0c35df9b43a1ead3cfc";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    axios.get(url).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form id="city-form" className="mb-3" onSubmit={handleSearch}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            autofocus="on"
            autocomplete="off"
            className="form-control shadow-sm"
            id="city-input"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary shadow-sm w-100"
            id="city-input"
          />
        </div>
        {/* <div className="col-3">
          <button
            type="button"
            class="btn btn-outline-success shadow-sm w-100"
            id="geo-position-button"
          >
            Where you
          </button>
        </div> */}
      </div>
    </form>
  );
  if (loaded) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              {form}
              <WeatherInfo data={weather} />
              <WeatherForecast coordinates={weather.coordinates} />
              <div className="weather-forecast" id="forecast"></div>
            </div>
            <small>
              <span>
                <a
                  href="https://github.com/OksanaKremendiuk/react-app-weather-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open-source code
                </a>
              </span>
              <span> by Oksana Kremendiuk</span>
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    let api = "4a6d5a2213f3c0c35df9b43a1ead3cfc";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    axios.get(url).then(showWeather);
    return "Loading...";
  }
}
