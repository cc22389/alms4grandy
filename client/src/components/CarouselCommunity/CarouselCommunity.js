import React from "react";
import community from "./Images/community.jpg";
import party from "./Images/birthdayParty.jpg";
import volunteer from "./Images/volunteer.jpg";


function CarouselCommunity() {
    return (
        <div className="masterContainer">
            <div className="container">
                <div className="carouselSize justify-content-center">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">

                            <div className="carousel-item">
                                <img src={community} className="d-block w-100" alt="community"></img>
                            </div>

                            <div className="carousel-item">
                                <img src={party} className="d-block w-100" alt="party"></img>
                            </div>

                            <div className="carousel-item">
                                <img src={volunteer} className="d-block w-100" alt="volunteer"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CarouselCommunity;