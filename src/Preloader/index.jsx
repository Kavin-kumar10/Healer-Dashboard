import React,{useState} from "react";
import './Preloader.scss';

const Preloader = () =>{
    const [message,setMessage] = useState('...Loading...');
    setTimeout(()=>{
        setMessage('Taking longer than usual please check your internet connection');
    },6000);
    return(
        <div className="Preloader" id="preload">
            <div className="circle">
            </div>
            <p>{message}</p>
        </div>
    )
}

export default Preloader;