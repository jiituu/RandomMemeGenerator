import React from "react";

import Images from "../images/troll-face.png";

export default function Header(){
    return(
        <div className="Header">
            <img src={Images}className="Image"/>

            <h2 className="Text">Meme Generator</h2>
            <img src={Images}className="Image"/>

        </div>
    )
}