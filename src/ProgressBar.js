import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ProgressBar.css";

export default function ProgressBar() {
  return (
    <div className="row">
      <div className="col-1 sunrise">
        <FontAwesomeIcon icon="sun" />
      </div>
      <div className="col">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "25%" }}
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="24"
          ></div>
        </div>
      </div>
      <div className="col-1 sunset">
        <FontAwesomeIcon icon="moon" />
      </div>
    </div>
  );
}
