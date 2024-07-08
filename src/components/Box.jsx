import React from "react";
import './Box.css';
import Script from "./script";

function Box(props) {
    return(
        <div className="box">
            {props.name}
            {props.num}
            <Script/>
        </div>



    )




}

export default Box;