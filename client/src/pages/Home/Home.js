import React from "react";
import Carousel from "../../components/Carousel/Carousel"
import stateMap from "./map_of_grandy_mn.jpg";
import "./Home.css";

function Home() {
    return (
        <div>
            <div className="row rowclass">
                <div className="col">
                    <h2>About us</h2>
                    <ul className="home">Grandy Community Center has been around for 20+ years. It houses the Grandy Lions for their pancake breakfasts' and monthly meetings.</ul>
                    <Carousel />
                </div>
                <div className="col">
                    <h2>Our History</h2>
                    <ul className="home">Paul Leuenberger and family donated five acres to the community center back in 1987</ul>
                    <ul className="home">In the early 90's the community center was able to buy a single portable classroom from Rush City School District, and moved it to Grandy.</ul>
                    <ul className="home">The community center went through it's latest update in the early 90's with the help of a lot of Lion members.</ul>
                    <ul className="home">In October of 1991, the community center became a nonprofit organization</ul>
                    <ul className="home">In 2008 Bob Taylor, Nancy Taylor, and Donna Biggins donated the Grandy Ballfield to the community center. The lions helped rebuild the feild so that today's youth can have a place to play ball.</ul>
                    <ul className="home">August 2016 we added a new swing set for community use.</ul>
                    <img className="state" src={stateMap} alt="state" />
                </div>
            </div>
        </div>
    )
}

export default Home;




