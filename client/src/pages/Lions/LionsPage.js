import React from "react";
import cubs from "./grandyLions.jpg";
import lions from "./internationalLions.jpg";
import "./LionsPage.css";

function LionsPage() {
    return (
        <div>
            <div className="row">
                <div className="col lion" style={{ textAlign: "center", float: "left", width: "50%", padding: "10px" }}>
                    <img src={cubs} style={{width: "50%"}} />
                    <br></br>
                    <br></br>
                    <h1>Grandy Lions Club</h1>
                    <hr style={{width: "30%"}}></hr>
                    <p>Box 30 </p>
                    <p>Grandy, MN 55029</p>
                    <p>(763) 689-5892</p>
                </div>
            </div>
            <div className="row">
                <div className="col lion" style={{ textAlign: "center", float: "left", width: "50%", padding: "10px" }}>
                    <br></br>
                    <br></br>
                    <img src={lions} style={{width: "50%"}}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>Lions Club International</h1>
                    <hr style={{width: "30%"}}></hr>
                    <p>300 W. 22nd Street</p>
                    <p>Oak Brook, IL 60523-8842 USA</p>
                    <p>+1 (630) 571-5466</p>
                </div>
            </div>
            {/* <br></br>
            <br></br>
            <div className="row">
                <div className="col" style={{ textAlign: "center"}}>
                    <h1>Grandy Lions Club</h1>
                    <hr style={{width: "50%"}}></hr>
                    <p>Box 30 </p>
                    <p>Grandy, MN 55029</p>
                    <p>(763) 689-5892</p>
                </div>
                <div className="col" style={{ textAlign: "center" }}>
                    <h1>Lions Club International</h1>
                    <hr  style={{width: "60%"}}></hr>
                    <p>300 W. 22nd Street</p>
                    <p>Oak Brook, IL 60523-8842 USA</p>
                    <p>+1 (630) 571-5466</p>
                </div>
            </div> */}
        </div>
    );
}

export default LionsPage;