import React,{useState,useEffect} from "react";
import './Profiles.scss'

const Profiles = ({User,index}) =>{
    console.log(User);
    return(
        <div className="Profiles">
            <div className="image">
                <img src={User.picture.large} alt= {index} />
            </div>
            <div className="desc">
                <h2>{User.name}</h2>
                <p>{User.dept}</p>
            </div>
        </div>
    )
}

export default Profiles
