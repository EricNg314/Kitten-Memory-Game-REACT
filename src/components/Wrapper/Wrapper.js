import React from "react";

import "./Wrapper.css";

const Wrapper = props => (
    <div className = "container mb-5">
        {props.children}
    </div>
)
export default Wrapper;
