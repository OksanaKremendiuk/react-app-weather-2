import React from "react";
import "./weatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  console.log(props);
  function handleResponse(response) {
    console.log(response);
  }
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "743bee57fddbfaf52447193a87d5dd25";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">thu</div>
          <img src="" alt="" width={36} />
          <div className="ForecastTemperature">
            <span className="ForecastTemperatureMax">19°</span>
            <span className="ForecastTemperatureMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
