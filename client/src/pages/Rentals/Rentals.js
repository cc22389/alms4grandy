import React from "react";
import CcCalendly from "../../utils/CcCalendly.js";
import BallCalendly from "../../utils/BallCalendly.js";
import "./Rentals.css";
import party from "./birthdayParty.jpg";
import field from "./field.jpg";
import ballField from "./ballField.jpg"
import Modal from "../../components/Modal/Modal"

const Rentals = () => {
  return (

    <div className="container">
      <div className="card bg-light mx-auto" style={{ width: "100%", height: "100%" }}>
        <div className="card-body" >
          <div className="row" style={{ verticalAlign: "middle" }}>
            <div className="col rentals" style={{ textAlign: "center", float: "left", width: "50%" }}>
              <img className="picture" src={party} style={{ width: "100%", }} alt="party" />
              <br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <div className="col rentals">
              <CcCalendly className="CcCalendly" />
            </div>
          </div>
        </div>
      </div>
      <br /><br />

      <div className="card bg-light mx-auto" style={{ width: "100%", height: "100%" }}>
        <div className="card-body">
          <div className="row">
            <div className="col" style={{ textAlign: "center", float: "left", width: "50%" }}>
              <img className="picture" src={ballField} style={{ width: "100%", margin: "auto" }} alt="field" /><br /><br />
              <img className="picture" src={field} style={{ width: "100%", margin: "auto" }} alt="field" />
            </div>
            <div className="col">
              <BallCalendly />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Modal />
    </div>

  );
}

export default Rentals;








