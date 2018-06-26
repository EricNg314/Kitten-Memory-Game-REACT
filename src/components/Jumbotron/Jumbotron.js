import React from "react";
import "./Jumbotron.css";


const Jumbotron = props => (
    <div className="jumbotron jumbotron-fluid text-center text-light">
        <div className="container">
            <h1 className="display-4">Kitten Memory Game</h1>
            <p className="lead">Click on an image to adopt a kitten, but avoid adopting twice.</p>
        </div>
    </div>
)

export default Jumbotron;