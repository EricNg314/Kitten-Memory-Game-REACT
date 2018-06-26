import React from "react";
import "./ModalEnd.css";

const ModalEnd = props => (
    <div className={"modal" + props.display} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title ">Results:</h1>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <h3 className="text-center">{props.message}</h3>
                </div>
                <div className="modal-footer">
                    <button onClick={props.closeModal} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

)

export default ModalEnd;