import React from "react";

export default function WeatherForecastDay(props) {
  console.log(props);
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <img
        src="https://openweathermap.org/img/wn/10d@2x.png"
        alt=""
        width="48"
      />
      <div className="ForecastTemperature">
        <span className="ForecastTemperatureMax">
          <strong>{maxTemperature()}</strong>
        </span>{" "}
        <span className="ForecastTemperatureMin">{minTemperature()}</span>
      </div>
    </div>
  );
}
