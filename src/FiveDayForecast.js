import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";

import "./FiveDayForecast.css";

export default function FiveDayForecast() {
  let forecastData = {
    highLow: "72° | 63°",
  };
  return (
    <div className="row five-day-forecast">
      <div className="col">
        <div className="day-one">
          Sun
          <br />
          <FontAwesomeIcon icon="cloud" />
          <div>{forecastData.highLow}</div>
        </div>
      </div>
      <div className="col">
        <div className="day-two">
          Mon
          <br />
          <FontAwesomeIcon icon="cloud" />
          <div>{forecastData.highLow}</div>
        </div>
      </div>
      <div className="col">
        <div className="day-three">
          Tue
          <br />
          <FontAwesomeIcon icon="cloud" />
          <div>{forecastData.highLow}</div>
        </div>
      </div>
      <div className="col">
        <div className="day-four">
          Wed
          <br />
          <FontAwesomeIcon icon="cloud" />
          <div>{forecastData.highLow}</div>
        </div>
      </div>
      <div className="col">
        <div className="day-five">
          Thu
          <br />
          <FontAwesomeIcon icon="cloud" />
          <div>{forecastData.highLow}</div>
        </div>
      </div>
    </div>
  );
}
