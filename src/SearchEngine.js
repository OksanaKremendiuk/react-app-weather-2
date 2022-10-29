import React, { useState } from "react";
import "./SearchEngine.css";
import axios from "axios";

export default function SearchEngine() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="city-form" className="mb-3">
              <div className="row">
                <div className="col-6">
                  <input
                    type="search"
                    placeholder="Change a city..."
                    autofocus="on"
                    autocomplete="off"
                    className="form-control shadow-sm"
                    id="city-input"
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
                <div className="col-3">
                  <button
                    type="button"
                    class="btn btn-outline-success shadow-sm w-100"
                    id="geo-position-button"
                  >
                    Where you
                  </button>
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city">Kyiv</h1>
              <ul>
                <li>
                  Last updated: <span id="date">13:20</span>
                </li>
                <li id="description"></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img src="" alt="" id="icon" class="float-left" />
                  <div className="float-left">
                    <strong id="temparature">20</strong>
                    <span className="units">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    pressure: <span id="pressure">1000</span>hPa
                  </li>
                  <li>
                    humidity: <span id="humidity">50</span>%
                  </li>
                  <li>
                    wind: <span id="wind">6</span> km/h
                  </li>
                </ul>
              </div>
            </div>
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
}

// {
//   let [city, setCity] = useState("");
//   let [weather, setWeather] = useState({});
//   let [loaded, setLoaded] = useState(false);

//   function showWeather(response) {
//     setLoaded(true);
//     setWeather({
//       cityName: response.data.name,
//       temperature: response.data.main.temp,
//       wind: response.data.wind.speed,
//       humidity: response.data.main.humidity,
//       icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
//       description: response.data.weather[0].description,
//     });
//   }

//   function handleSearch(event) {
//     event.preventDefault();
//     let api = "4a6d5a2213f3c0c35df9b43a1ead3cfc";
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
//     axios.get(url).then(showWeather);
//   }
//   function updateCity(event) {
//     setCity(event.target.value);
//   }
//   let form = (
//     <form onSubmit={handleSearch}>
//       <input
//         type="search"
//         placeholder="Enter a city..."
//         onChange={updateCity}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
//   if (loaded) {
//     return (
//       <div className="App">
//         {form}
//         <br />
//         <div>Current weather in {weather.cityName}:</div>
//         <ul>
//           <li>Temperature: {Math.round(weather.temperature)}°C</li>
//           <li>Humidity: {weather.humidity}%</li>
//           <li>Wind: {weather.wind} km/h</li>
//           <li>Description: {weather.description}</li>
//           <li>
//             <img src={weather.icon} alt={weather.description} />
//           </li>
//         </ul>
//       </div>
//     );
//   } else {
//     return form;
//   }
// }
