import React from "react";
import BulletinBoard from "../../components/BulletinBoard/BulletinBoard";
import LoginRouter from "../../components/LoginRouter/LoginRouter";

function CommunityLanding() {
  return (
    <div>
      <h4 style={{ textAlign: "center", color: "rgb(45,49,66)" }}>
        <LoginRouter />
      </h4>
      <div style={{ textAlign: "center" }}>
        {" "}
        <BulletinBoard />
      </div>
    </div>
  );
}

export default CommunityLanding;
