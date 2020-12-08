import React from "react";
import LoginRouter from "../../components/LoginRouter/LoginRouter";
import NoteCard from "../../components/NoteCard/NoteCard";

function CommunityLanding() {
  return (
    <div className="row">
      <h4 className="col-4" style={{ textAlign: "center", color: "rgb(45,49,66)" }}>
        <LoginRouter />
      </h4>
      <div className="col" style={{ textAlign: "center", marginRight: "8%"}}>
        {" "}
        <NoteCard />
      </div>
    </div>
  );
}

export default CommunityLanding;
