import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

function Navbar() {
    const location = useLocation();
    return (
        <nav className="nav nav-pills flex-column flex-sm-row justify-content-end">
            <Link
                to="/"
                className={location.pathname === "/" ? "nav-link" : "nav-link"}>
                Home
            </Link>
            <Link
                to="/rentals"
                className={location.pathname === "/rentals" ? "nav-link" : "nav-link"}>
                Rentals
            </Link>
            <Link
                to="/communitylanding"
                className={location.pathname === "/communitylanding" ? "nav-link" : "nav-link"}>
                Community
            </Link>
            <Link
                to="/lions"
                className={location.pathname === "/lions" ? "nav-link" : "nav-link"}>
                Lions
            </Link>

        </nav>
    )
}

export default Navbar;

