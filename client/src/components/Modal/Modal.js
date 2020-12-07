import React, { useState } from "react";
import "./modal.css";
import Us from "./Us.png"
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function App() {
    const [isOpen, setIsOpen] = useState(true);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <button style={{ background: "rgb(45,49,66)", color: "white", padding: "10px", border: "2px solid lightGray", borderRadius: "10px", fontSize: "150%", fontWeight: "bold" }} onClick={toggleModal}>ATTENTION</button>
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div style={{ textAlign: "center" }}>
                    <p className="mo" style={{ fontWeight: "bold", textDecoration: "underline" }}>DO NOT ENTER ANY PAYMENT INFORMATION!</p>
                    <p>This is a mock website created by students for a project.</p>
                    <p>To learn more about these students, click <a href="https://github.com/cc22389/alms4grandy" target="blank" ><button style={{ background: "rgb(45,49,66)", color: "white", padding: "10px", border: "2px solid lightGray", borderRadius: "10px", fontSize: "85%" }}> here </button></a> and see the contributors section.</p><br />
                    <div style={{ textAlign: "center" }}>
                        <img src={Us} alt="Contributors" style={{ border: "2px solid lightGray", borderRadius: "10px" }} /><br /><br /><br />
                    </div>
                    <p>Visit the actual Grandy Community Center page <a href="http://www.grandycc.com/" ><button style={{ background: "rgb(45,49,66)", color: "white", padding: "10px", border: "2px solid lightGray", borderRadius: "10px", fontSize: "85%" }}>here</button></a>.</p><br />
                </div>
                <div style={{ textAlign: "center" }}>
                    <button style={{ background: "rgb(45,49,66)", color: "white", padding: "10px", border: "2px solid lightGray", borderRadius: "10px", fontSize: "150%", width: "20%", fontWeight: "bold" }} onClick={toggleModal}>Close</button>
                </div>
            </Modal>
        </>
    );
}