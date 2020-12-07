import React from "react";
import mainRoom from "./Images/mainRoom.png";
import kitchen from "./Images/kitchen.png";
import playground from "./Images/playground.png";
import kitchen2 from "./Images/kitchen2.png";
import yard from "./Images/yardView.png";
import parking from "./Images/parkingView.png";
import lions from "./Images/lionsView.png";
import sign from "./Images/sign.png";
import "./Carousel.css";

function Carousel() {
    return (
        <div className="calendlyCorrection">
        <div className="masterContainer">
            <div className="container">
                <div className="carouselSize justify-content-center">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <img src={yard} className="d-block w-100" alt="View from yard"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={parking} className="d-block w-100" alt="View from parking lot"></img>
                            </div>
                            {/* <div className="carousel-item">
                                <img src={community} className="d-block w-100" alt="community"></img>
                            </div> */}
                            <div className="carousel-item active">
                                <img src={mainRoom} className="d-block w-100" alt="Main Room"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={lions} className="d-block w-100" alt="Main Room"></img>
                            </div>
                            {/* <div className="carousel-item">
                                <img src={party} className="d-block w-100" alt="party"></img>
                            </div> */}
                            <div className="carousel-item">
                                <img src={kitchen} className="d-block w-100" alt="kitchen"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={kitchen2} className="d-block w-100" alt="kitchen"></img>
                            </div>
                            {/* <div className="carousel-item">
                                <img src={volunteer} className="d-block w-100" alt="volunteer"></img>
                            </div> */}
                            <div className="carousel-item">
                                <img src={playground} className="d-block w-100" alt="playground"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={sign} className="d-block w-100" alt="sign"></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Carousel;