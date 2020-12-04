import React from "react";
import Login from '../../components/Login/Login'

function LoginPage() {
    return (
        <div className="card bg-light mx-auto" style={{maxWidth: "50%", float: "center", margin: 0, float: "none"}}>
            <div className="card-header" style={{textAlign: "center", fontSize: "100%"}}><strong>Account Login</strong></div>
            <div className="card-body">
                <br></br>
                <p style={{textAlign: "center"}}><Login/> </p> 
            </div>
      </div>
    )
}

export default LoginPage;