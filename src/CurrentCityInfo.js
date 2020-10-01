import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./CurrentCityInfo.css";

export default function CurrentCityInfo() {
  let weatherData = {
    highLow: "65° | 60°",
    description: "Broken Clouds",
    feelsLike: "Feels like 66°",
    currentTime: "As of 5:53 pm",
    currentDate: "On September 4, 2020",
    sunrise: "Sunrise: 9:24 am",
    sunset: "Sunset: 7:03 pm",
  };
  return (
    <div className="current-city-info">
      <span className="city-specs">
        <div>{weatherData.highLow}</div>
        <div className="description">{weatherData.description}</div>
        <div>{weatherData.feelsLike}</div>
      </span>
      <div className="row todays-forecast">
        <div className="col">{weatherData.currentTime}</div>
        <div className="col">{weatherData.currentDate}</div>
      </div>
      <div className="row">
        <div className="col">{weatherData.sunrise}</div>
        <div className="col">{weatherData.sunset}</div>
      </div>
    </div>
  );
}
