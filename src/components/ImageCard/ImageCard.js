import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="col-md-3">
        <div className="card my-2">
            <div className="card-img-top ">
                <img className="w-100" alt={`Kitten ${props.id}`} src={props.image} />
            </div>
        </div>
    </div>
)

export default ImageCard;