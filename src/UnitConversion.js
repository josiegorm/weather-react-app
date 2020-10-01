import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UnitConversion() {
  return (
    <div
      className="btn-group unit-conversion"
      role="group"
      aria-label="fahrenheit-celsius"
    >
      <button type="button" className="btn btn-secondary fahrenheit">
        °F
      </button>
      <button type="button" className="btn btn-secondary celsius">
        °C
      </button>
    </div>
  );
}
