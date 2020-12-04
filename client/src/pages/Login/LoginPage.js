import React from "react";
import Login from '../../components/Login/Login'
import {Link, useLocation} from "react-router-dom";

function LoginPage() {
    const location = useLocation();
    return (
        <div>
            <div className="card bg-light mx-auto" style={{ maxWidth: "50%", float: "center", margin: 0, float: "none" }}>
                <div className="card-header" style={{ textAlign: "center", fontSize: "25px" }}><strong>Account Login</strong></div>
                <div className="card-body">
                    <br></br>
                    <p style={{ textAlign: "center" }}><Login /> </p>
                </div>
            </div>
            <Link
                style={{color: "rgb(45,49,66)", textAlign: "center", textDecoration: "underline"}}
                to="/communitylanding"
                className={location.pathname === "/communitylanding" ? "nav-link" : "nav-link"}>
                Back
            </Link>
        </div>
    )
}

export default LoginPage;