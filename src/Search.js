import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  return (
    <form className="form-inline search">
      <input type="text" className="form-control" placeholder="Enter a city" />
      <input
        type="submit"
        className="form-control search-button"
        value="Search"
      />
      <button type="button" className="btn btn-primary">
        <FontAwesomeIcon icon="map-marker-alt" />
      </button>
    </form>
  );
}
