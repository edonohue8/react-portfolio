import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
    return (
        <div className="navApp">
            <nav className="navbar">

                {/* Create space in navbar */}
                <div className="col-md-1"></div>

                <div className="col-md-3">
                    <span id="name" className="navbar-brand mb-0 h1">Eric Donohue</span>
                </div>

                {/* Create space in navbar */}
                <div className="col-md-3"></div>

                <div className="col-md-1">
                    <Link to="/About">About Me</Link>
                </div>

                <div className="col-md-1">
                    <Link to="/Portfolio">Portfolio</Link>
                </div>

                <div className="col-md-1">
                    <Link to="/Contact">Contact</Link>
                </div>

                {/* Create space in navbar */}
                <div className="col-md-1"></div>

            </nav>
        </div>
    )
}

export default Navbar;