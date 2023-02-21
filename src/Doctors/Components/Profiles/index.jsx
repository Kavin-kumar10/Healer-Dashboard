import React,{useState,useEffect} from "react";
import './Profiles.scss'

const Profiles = ({User,index}) =>{
    console.log(User);
    return(
        <div className="Profiles">
            <img src={User.picture.large} alt= {index} />
            <h2>{User.name.title} {User.name.first} {User.name.last}</h2>
            <p>ortho</p>
        </div>
    )
}

export default Profiles
