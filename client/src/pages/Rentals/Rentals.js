import React from "react";
import CcCalendly from "../../utils/CcCalendly.js";
import BallCalendly from "../../utils/BallCalendly.js";
import "./Rentals.css";


const Rentals = () => {
  return (
    <div>
      <h1>Rentals</h1>
      <CcCalendly></CcCalendly>
      <BallCalendly></BallCalendly>
    </div>
  );
};

export default Rentals;