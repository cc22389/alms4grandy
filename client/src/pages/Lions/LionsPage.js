import React from "react";
import cubs from "./grandyLions.jpg";
import lions from "./internationalLions.jpg";
import "./LionsPage.css";

function LionsPage() {
    return (
            <div className="row rowclass">
                <div className="col" style={{textAlign: "center", padding: "10px"}}>
                    <div className="card bg-light mx-auto" style={{ margin: "auto", width: "80%" }}>
                        <div className="card-body">
                            <div>
                                <img src={cubs} style={{ width: "25%" }} />
                            </div>
                            <br></br>
                            <br></br>
                            <div>
                                <h1>Grandy Lions Club</h1>
                                <hr style={{ width: "55%" }}></hr>
                                <p>Box 30 </p>
                                <p>Grandy, MN 55029</p>
                                <p>(763) 689-5892</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col" style={{textAlign: "center", padding: "10px"}}>
                    <div className="card bg-light mx-auto" style={{ margin: "auto", width: "80%" }}>
                        <div className="card-body" style={{ height: "auto" }}>
                            <div>
                                <img src={lions} style={{ width: "30%" }} />
                            </div>
                            <br></br>
                            <br></br>
                            <div>
                                <h1>Lions Club International</h1>
                                <hr style={{ width: "70%" }}></hr>
                                <p>300 W. 22nd Street</p>
                                <p>Oak Brook, IL 60523-8842 USA</p>
                                <p>+1 (630) 571-5466</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default LionsPage;