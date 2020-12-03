import React from "react";
import CcCalendly from "../../utils/CcCalendly.js";
import BallCalendly from "../../utils/BallCalendly.js";
import "./Rentals.css";


const Rentals = () => {
  return (
    <div className="container">
      <h2>Rentals</h2>
      <br></br>
      <div className="rowRental">
        <div className="col calendar">
          <CcCalendly></CcCalendly>
        </div>
        <div className="col calendar">
          <BallCalendly></BallCalendly>
        </div>
      </div>
    </div>
  );
};

export default Rentals;





