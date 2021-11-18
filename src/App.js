import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {

  
  return (
    <div className="App">
        <div className="container">
      <Weather defaultCity="Split"/>
      <footer>
        <p>This project was coded by <a href="https://app.netlify.com/sites/pedantic-golick-389ca6" target="_blank">
        Kristina Kocur</a> and it is open-sourced on <a href="https://github.com/kika1809/react-weather" target="_blank">GitHub</a>, hosted on <a href="https://github.com/kika1809/react-weather" target="_blank">Netlify</a>.</p>
      </footer>
      </div>
    </div>
  );
}
