import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <App />
      <br />
      <footer>
        Coded by Oksana Kremendiuk.{" "}
        <a href="https://github.com/OksanaKremendiuk/react-app-weather">Open source</a>.
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
