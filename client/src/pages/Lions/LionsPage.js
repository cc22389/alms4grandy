import React from "react";
import cubs from "./grandyLions.jpg";
import lions from "./internationalLions.jpg";
import "./LionsPage.css";

function LionsPage() {
    return (
        <>
         <div className="col" style={{ textAlign: "center", padding: "10px" }}>
                <div className="card bg-light mx-auto" style={{ margin: "auto", width: "80%" }}>
                    <div className="card-body" style={{ height: "auto" }}>
                        <div>
                            <a href="https://www.lionsclubs.org/en/discover-our-clubs/mission-and-history" target="blank"  style={{color: "rgb(45,49,66)", textAlign: "center", textDecoration: "underline"}}><h1>Lions Clubs International:</h1></a><br/>
                            <p style={{textAlign: "justify"}}>Lions serve. It’s that simple, and it has been since we first began in 1917. Our clubs are places where individuals join together to give their valuable time and effort to improving their communities, and the world.</p>
                            <p style={{textAlign: "justify"}}>Our Mission is to empower volunteers to serve their communities, meet humanitarian needs, encourage peace and promote international understanding through Lions clubs.</p>
                            <p style={{textAlign: "justify"}}>Our vision is to be the global leader in community and humanitarian service.</p>
                            <a href="https://www.lionsclubs.org/en" target="blank" ><button>Learn More</button></a>
                            <a href="https://www.lionsclubs.org/en/join/membership-form" target="blank"><button>Join</button></a>
                            <a href="https://www.lionsclubs.org/en/donate" target="blank"><button>Donate</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row rowclass">
                <div className="col" style={{ textAlign: "center", padding: "10px" }}>
                    <div className="card bg-light mx-auto" style={{ margin: "auto", width: "80%" }}>
                        <div className="card-body">
                            <div>
                                <img src={cubs} style={{ width: "25%" }} alt="GrandyLions" />
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
                <div className="col" style={{ textAlign: "center", padding: "10px" }}>
                    <div className="card bg-light mx-auto" style={{ margin: "auto", width: "80%" }}>
                        <div className="card-body" style={{ height: "auto" }}>
                            <div>
                                <img src={lions} style={{ width: "30%" }} alt="InternationalLions" />
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
        </>
    );
}

export default LionsPage;