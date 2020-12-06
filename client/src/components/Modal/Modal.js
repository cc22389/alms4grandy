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
        <div className="App">
            <button style={{ background: "rgb(45,49,66)", color: "white", padding: "10px", border: "2px solid lightGray", borderRadius: "10px", fontSize: "150%", fontWeight: "bold" }} onClick={toggleModal}>ATTENTION</button>

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
            >
                <div style={{ textAlign: "center" }}>
                    <p>This is a mock website created by students as a project. Do NOT enter any credit card information, as the site IS functional.</p>
                    <p>To learn more about these students click <a href="https://github.com/cc22389/alms4grandy" target="blank" ><button style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "10px", border: "2px solid lightGray", borderRadius: "10px", fontSize: "60%" }}> here </button></a> and see "Contributors"</p>
                    <div style={{ textAlign: "center" }}>
                        <img src={Us} alt="Contributors" /><br /><br />
                    </div>
                    <p>To visit the actual Grandy Community Center site click <a href="http://www.grandycc.com/" ><button style={{ background: "#fdd835", color: "rgb(45,49,66", padding: "10px", border: "2px solid lightGray", borderRadius: "10px", fontSize: "60%" }}> here </button></a></p>
                </div>
                <div style={{ textAlign: "center" }}>
                    <button style={{ background: "rgb(45,49,66)", color: "white", padding: "10px", border: "2px solid lightGray", borderRadius: "10px", fontSize: "150%", width: "20%", fontWeight: "bold" }} onClick={toggleModal}>Close</button>
                </div>
            </Modal>
        </div>
    );
}