import React from "react";
import image from '../Assets/404.svg'
import './PageNotFound.scss'

const PageNotFound = () =>{
    return(
        <div className="PageNotFound">
            <div className="img">
                <img src={image} alt="1" />
            </div>
            <div className="content">
                <h1>404</h1>
                <p>Page Not Found</p>
            </div>
        </div>
    )
}

export default PageNotFound