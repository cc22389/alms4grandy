import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="row rowclass">
                <div className="col footer">
                    <h3>Contact Us</h3>
                    <h5>
                        <a href="https://www.google.com/maps/place/Grandy+Community+Center+Inc/@45.6405426,-93.2003756,15z/data=!4m5!3m4!1s0x0:0x49d12c1beaa80ada!8m2!3d45.6405426!4d-93.2003756" target="_blank">2749 County Road 6 NE Grandy MN 55029</a>
                        </h5>
                    <h5>763.689.1533</h5>
                    <h5>
                        <a href="mailto:cc@GrandyCC.com" target="_blank">cc@GrandyCC.com</a>
                    </h5>
                </div>
                <div className="col footer">
                    <h3>Media</h3>
                        <a class="fa fa-facebook" href="https://www.facebook.com/Grandy-Community-Center-986959121394278/" target="_blank"></a>
                </div>
                <div className="col footer">
                    <h3>Get Involved</h3>
                    <h5>
                        <a href="https://www.lionsclubs.org/en" target="_blank">Lions Club International</a>
                        </h5>
                    <h5>
                        <a href="https://www.facebook.com/pages/Grandy-Lions-Club/383815001722003" target="_blank">Grandy Lions</a>
                        </h5>
                </div>

            </div>
        </footer>
    )
}

export default Footer;