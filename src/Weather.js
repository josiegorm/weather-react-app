import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Weather(props) {
  function displayTemperature(response) {
    alert(
      `The temperature in ${props.city} is ${Math.round(
        response.data.main.temp
      )}°F`
    );
  }
  let apiKey = "74759ba87cafa7b384b77efd8fb12cec";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=imperial&appid=${apiKey}`;
  axios.get(url).then(displayTemperature);

  return (
    <div>
      <h2>Hello from Weather</h2>
      <Loader type="Grid" color="#00BFFF" height={100} width={100} />
    </div>
  );
}
