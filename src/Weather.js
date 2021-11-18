import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";


export default function Weather(props) {
   const [weatherData, setWeatherData] = useState({ready: false});
  
  function handleWeatherResponse(response) {
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      time: new Date(response.data.dt *1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind:Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      ready: true
    });
   
  }
   
  if (weatherData.ready) {
     return (
      <div className="Weather">
        <form>
        <div className="row">
          <div className="col-9">
              <input type="search"
                placeholder="Input city name"
                className="form-control"
                autoFocus="on"
              />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
           <li>
             <FormattedDate date={weatherData.time} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
            <img src={weatherData.icon}
              alt={weatherData.description}
              className="float-left"
              />
              <div className="float-left">
                 <span className="temperature">{ Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
                </div>
            </div>
            </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
        </ul>
          </div>

        </div>
      </div>
    );
  }
  else {
    const apiKey = "92161eb593fedf6f773cc741f318b677";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(handleWeatherResponse);
    return "Loading...";
  }
  
 
}
