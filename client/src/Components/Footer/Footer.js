import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="row rowclass">
                <div className="col footer">
                    <h3>Contact Us</h3>
                    <h5>2749 County Road 6 NE Grandy MN 55029</h5>
                    <h5>763.689.1533</h5>
                    <h5>cc@GrandyCC.com</h5>
                </div>
                <div className="col footer">
                    <h3>Media</h3>
                    <h5>Facebook</h5>
                    <h5>Instagram</h5>
                </div>
                <div className="col footer">
                    <h3>Get Involved</h3>
                    <h5>Lions Club International</h5>
                    <h5>Grandy Lions</h5>
                </div>

            </div>
        </footer>
    )
}

export default Footer;