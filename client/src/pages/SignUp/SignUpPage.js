import React from "react";
import SignUp from '../../components/SignUp/SignUp'
import {Link, useLocation} from "react-router-dom";




function SignUpPage() {
    const location = useLocation();
    return (
        <div>
            <div className="card bg-light mx-auto" style={{ maxWidth: "50%", float: "center", margin: 0 }}>
                <div className="card-header" style={{ textAlign: "center", fontSize: "25px" }}><strong>Create New Account</strong></div>
                <div className="card-body">
                    <br></br>
                    <p style={{ textAlign: "center" }}><SignUp /> </p>
                </div>
            </div>
            <Link
                style={{ color: "rgb(45,49,66)", textAlign: "center", textDecoration: "underline"}}
                to="/communitylanding"
                className={location.pathname === "/communitylanding" ? "nav-link" : "nav-link"}>
                Back
            </Link>
        </div>
    )
}

export default SignUpPage;