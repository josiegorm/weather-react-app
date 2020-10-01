import React from "react";
import Search from "./Search";
import UnitConversion from "./UnitConversion";

import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";

export default function Header() {
  return (
    <div className="row justify-content-center Header">
      <div className="col-8">
        <Search />
      </div>
      <div className="col-3">
        <UnitConversion />
      </div>
    </div>
  );
}
