import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="col-md-3 col-4">
        <div className="card my-2" onClick={() => props.selectKitten(props.id)}>
            <div className="card-img-top center-cropped hvr-grow">
                <img className="w-100 image" alt={`Kitten ${props.id}`} src={props.image} />
            </div>
        </div>
    </div>
)

export default ImageCard;