import React from "react";
import Header from "./Header";
import CurrentCityTemp from "./CurrentCityTemp";
import CurrentCityInfo from "./CurrentCityInfo";
import ProgressBar from "./ProgressBar";
import FiveDayForecast from "./FiveDayForecast";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faCloud,
  faCloudRain,
  faSnowflake,
  faBolt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

library.add(
  faSun,
  faMoon,
  faCloud,
  faCloudRain,
  faSnowflake,
  faBolt,
  faMapMarkerAlt
);
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Header />
          <CurrentCityTemp />
          <CurrentCityInfo />
          <ProgressBar />
          <FiveDayForecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
