import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function Search() {
  let [city, newCity] = useState("");
  let [info, newInfo] = useState("");
  let [tempe, newTempe] = useState(null);

  function typedinData(event) {
    newCity(event.target.value);
  }
  function submittedAction(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=92161eb593fedf6f773cc741f318b677&units=metric`;
    axios.get(apiUrl).then(getTempe);
  }
  function getTempe(response) {
    newTempe(Math.round(response.data.main.temp));
  }

  return (
    <div className="WeatherInfo">
      <form onSubmit={submittedAction}>
        <input type="search" onChange={typedinData} />
        <input type="submit" value="Search" />
      </form>

      <h2>{info}</h2>
    </div>
  );
}
