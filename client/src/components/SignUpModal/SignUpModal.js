import React, { useState } from "react";
import "./signupmodal.css";
import Modal from "react-modal";
import SignUp from "../SignUp/SignUp";

Modal.setAppElement("#root");

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="all">
            <div style={{ textAlign: "center" }}>
                <button style={{ background: "rgb(45,49,66)", color: "white", padding: "5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "80%" }} onClick={toggleModal}><strong>Create Account</strong></button>
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
                style={{ zoom: 5 }}
            >
                <div style={{ textAlign: "center", zoom: 2 }}>
                    <SignUp/><br/>
                    <button style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "5px 5px", border: "#fdd835", borderRadius: "4px", fontSize: "80%" }} onClick={toggleModal}>Close</button>
                </div>
            </Modal>
        </div>
    );
}