import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import './Profiles.scss'

const Profiles = ({User,index}) =>{
    console.log(User);
    const showUser = (e) =>{
        console.log(e);
    }
    return(
        <div className="Profiles">
            <div className="image">
                <img src={User.picture.large} alt= {index} />
            </div>
            <div className="desc">
                <h2>{User.name}</h2>
                <p>{User.dept}</p>
                <div className="btnP">
                    <Link to={`./${User._id}`}>
                        <button id="Details" onClick={()=>console.log(User.name)}>Details</button>
                    </Link>
                    <button id="Meet">Meet</button>
                </div>
            </div>
        </div>
    )
}

export default Profiles
