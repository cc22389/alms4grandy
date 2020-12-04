import React from "react";
import SignUp from '../../components/SignUp/SignUp'

function SignUpPage() {
    return (
        <div className="card bg-light mx-auto" style={{ maxWidth: "50%", float: "center", margin: 0, float: "none" }}>
            <div className="card-header" style={{ textAlign: "center", fontSize: "100%" }}><strong>Create New Account</strong></div>
            <div className="card-body">
                <br></br>
                <p style={{ textAlign: "center" }}><SignUp /> </p>
            </div>
        </div>
    )
}

export default SignUpPage;