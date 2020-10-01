import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CurrentCityTemp.css";

export default function CurrentCityTemp() {
  let weatherData = {
    temperature: "63°F",
    city: "Berlin",
  };
  return (
    <div className=".current-city-temp">
      <br />
      <h1 className="temp-icon">
        <FontAwesomeIcon icon="sun" />
      </h1>
      <h1>{weatherData.temperature}</h1>
      <h2>{weatherData.city}</h2>
    </div>
  );
}
