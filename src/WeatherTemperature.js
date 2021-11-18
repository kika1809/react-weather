import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("metric");
    function showF(event) {
        event.preventDefault();
        setUnit("imperial");
    }
    function showC(event) {
        event.preventDefault();
        setUnit("metric");
    }

    if(unit==="metric"){
    return (
    <div className="WeatherTemperature">
        <span className="temperature">
         { Math.round(props.celsius)}
        </span>
        <span className="unit">°C | <a href="/" onClick={showF}>°F</a> </span>
           
    </div>);
    }
    else {
        let tempF = props.celsius * 9 / 5 + 32;
      return (
      <div className="WeatherTemperature">
          <span className="temperature">
          { Math.round(tempF)}
          </span>
          <span className="unit"><a href="/" onClick={showC}>°C</a> | °F </span>
          
      </div>);
    }
}


