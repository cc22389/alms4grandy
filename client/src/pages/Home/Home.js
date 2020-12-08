import React from "react";
import Carousel from "../../components/Carousel/Carousel"
import stateMap from "./map_of_grandy_mn.jpg";
import "./Home.css";

function home() {
    return (
        <div>
            <div className="row rowclass">
                <div className="col">
                    <h2 className="AboutUs">About us</h2>
                    <ul className="hometext">Grandy Community Center has been around for 20+ years. It houses the Grandy Lions for their pancake breakfasts' and monthly meetings.</ul>
                    <Carousel />
                </div>
                <div className="col">
                    <h2 className="OurHistory">Our History</h2>
                    <ul className="hometext">Paul Leuenberger and family donated five acres to the community center back in 1987</ul>
                    <ul className="hometext">In the early 90's the community center was able to buy a single portable classroom from Rush City School District, and moved it to Grandy.</ul>
                    <ul className="hometext">The community center went through it's latest update in the early 90's with the help of a lot of Lion members.</ul>
                    <ul className="hometext">In October of 1991, the community center became a nonprofit organization</ul>
                    <ul className="hometext">In 2008 Bob Taylor, Nancy Taylor, and Donna Biggins donated the Grandy Ballfield to the community center. The lions helped rebuild the feild so that today's youth can have a place to play ball.</ul>
                    <ul className="hometext">August 2016 we added a new swing set for community use.</ul>
                    <img className="state" src={stateMap} alt="state" />
                </div>
            </div>
        </div>
    )
}

export default home;




