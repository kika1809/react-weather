import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function Search() {
  let [city, newCity] = useState("");
  let [info, newInfo] = useState(false);
  let [weather, setWeather] = useState({});

  function typedinData(event) {
    newCity(event.target.value);
  }
  function submittedAction(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=92161eb593fedf6f773cc741f318b677&units=metric`;
    axios.get(apiUrl).then(getTempe);
  }

  function getTempe(response) {
    newInfo(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `pictures/${response.data.weather[0].icon}.png`
    });
  }

  let form = (
    <form onSubmit={submittedAction}>
      <input type="search" placeholder="Enter a city" onChange={typedinData} />
      <button type="Submit">Search</button>
    </form>
  );

  if (info) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
