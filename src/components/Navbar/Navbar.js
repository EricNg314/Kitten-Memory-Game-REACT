import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar sticky-top d-flex navbar-expand-lg navbar-light text-center">

        <div className="col-md-4">
            <h2>Kitten Memory Game</h2>
        </div>
        <div className="col-md-4">
            <h2 className="" >Click a kitten image below.</h2>
        </div>
        <div className="col-md-4">
            <h2 className="" >Score : {props.score} | Top: {props.top_score}</h2>
        </div>

    </nav>
)

export default Navbar;