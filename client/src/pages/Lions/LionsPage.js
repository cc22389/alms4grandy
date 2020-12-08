import React from "react";
import cubs from "./grandyLions.jpg";
import lions from "./internationalLions.jpg";
import members from "./community.jpg";
import "./LionsPage.css";

function LionsPage() {
    return (
        <>
           <div className="row rowclass">
                <div className="col" style={{ textAlign: "center", padding: "10px" }}>
                    <div className="card bg-light mx-auto" style={{ margin: "auto", width: "50%" }}>
                        <div className="card-body" style={{ height: "auto" }}>
                            <div>
                                <img src={lions} style={{ width: "30%" }} alt="InternationalLions" />
                            </div>
                            <br></br>
                            <br></br>
                            <div className="calendlyCorrection">
                                <h1>Lions Club International</h1>
                                <hr style={{ width: "70%", color: "#C8C8C8" }}></hr>
                                <p style={{fontSize: "25px"}}>300 W. 22nd Street</p>
                                <p style={{fontSize: "25px"}}>Oak Brook, IL 60523-8842 USA</p>
                                <p style={{fontSize: "25px"}}>+1 (630) 571-5466</p>
                            </div>
                            <div className="calendlyCorrection">
                                <br></br>
                                <div className="quote" style={{ textAlign: "center" }}>"Lions serve. It’s that simple, and it has been since we first began in 1917." </div>
                                <br></br>

                                <a href="https://www.lionsclubs.org/en/discover-our-clubs/mission-and-history" target="blank"><button style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "15px", border: "2px solid lightGray", borderRadius: "10px", width: "19%", margin: "2%" }}><strong>Mission & History</strong></button></a>
                                <a href="https://www.lionsclubs.org/en" target="blank" ><button style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "15px", border: "2px solid lightGray", borderRadius: "10px", width: "19%", margin: "2%" }}><strong>Learn More</strong></button></a>
                                <a href="https://www.lionsclubs.org/en/join/membership-form" target="blank"><button style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "15px", border: "2px solid lightGray", borderRadius: "10px", width: "19%", margin: "2%" }}><strong>Join</strong></button></a>
                                <a href="https://www.lionsclubs.org/en/donate" target="blank"><button style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "15px", border: "2px solid lightGray", borderRadius: "10px", width: "19%", margin: "2%" }}><strong>Donate</strong></button></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br></br>
            <br></br>
            <div className="row rowclass">
                <div className="col" style={{ textAlign: "center", padding: "10px" }}>
                    <div className="card bg-light mx-auto" style={{ margin: "auto", width: "50%" }}>
                        <div className="card-body">
                            <div>
                                <img src={cubs} style={{ width: "25%" }} alt="GrandyLions" />
                                <img src ={members} style={{width: "25%"}} alt="members" />
                            </div>
                            <br></br>
                            <br></br>
                            <div className="calendlyCorrection">
                                <h1>Grandy Lions Club</h1>
                                <hr style={{ width: "55%", color: "#C8C8C8" }}></hr>
                                <p style={{fontSize: "25px"}}>Box 30 </p>
                                <p style={{fontSize: "25px"}}>Grandy, MN 55029</p>
                                <p style={{fontSize: "25px"}}>(763) 689-5892</p>
                                <a href="https://www.facebook.com/pages/Grandy%20Lions%20Club/383815001722003/" target="blank"><button style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "10px", border: "2px solid lightGray", borderRadius: "10px", width: "19%", margin: "2%" }}><i  className="fab fa-facebook" style={{color: "rgb(45,49,66)", width: "100%", fontSize: "36px", hover: "none"}}></i></button></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LionsPage;