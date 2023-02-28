import React, { useState } from "react";

import './main.scss';
import MainBottom from "./MainBottom";
import MainTop from "./MainTop";
import Maincat from "./Maincat";

const Main = () =>{

    return(
        <div className="main">
            <MainTop/>
            <MainBottom/>
            <Maincat/>
        </div>
    )
}

export default Main