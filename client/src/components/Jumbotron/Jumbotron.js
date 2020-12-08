import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Grandy Community Center</h1>
            <hr className="my-4" style={{color: "#fdd835"}}></hr>  
            <h1 className="tag">Home of the Grandy Lions</h1>
        </div>
    )
}

export default Jumbotron;