import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
    <nav class="navbar d-flex navbar-expand-lg navbar-light bg-primary text-center">

        <div className="col-md-4">
        <Link to="/" className="text-light" ><h2>Kitten Memory Game</h2>
        </Link>
        </div>
        <div className="col-md-4">
            <h2 className="text-light" >Click a kitten image below.</h2>
        </div>
        <div className="col-md-4">
            <h2 className="text-light" >Score</h2>
        </div>

    </nav>
)

export default Navbar;