import React,{useState,useEffect} from "react";
import './sidebar.scss';
import logo from '../Assets/logo.png'
import { Link,useLocation } from "react-router-dom";
import {BsSun,BsMoon} from 'react-icons/bs'
import {CiMedicalCross,CiStethoscope,CiBoxList,CiSettings,CiClock2,CiGrid41,CiTimer} from 'react-icons/ci';
import {BsGraphUp} from 'react-icons/bs'

const Sidebar = () =>{
    //Nav highlight process
    const location = useLocation();
    const currpath = location.pathname;
    // console.log(currpath);
    const styleForCurr = {
        background:`var(--tertiary-color)`,
        opacity:1
    }

    //Bright and Dark mode
    const [light,setLight] = useState();
    useEffect(() => {
        if(light == 0){
            document.documentElement.style.setProperty('--primary-color','rgb(19, 19, 26)');
            document.documentElement.style.setProperty('--secondary-color','black');
            document.documentElement.style.setProperty('--tertiary-color','rgb(49, 185, 190)');
            document.documentElement.style.setProperty('--primary-bright','white');
        }
        else if(light == 1){
            document.documentElement.style.setProperty('--primary-color','white');
            document.documentElement.style.setProperty('--secondary-color','rgb(131, 138, 151)');
            document.documentElement.style.setProperty('--tertiary-color','rgba(119, 224, 189, 0.534)');
            document.documentElement.style.setProperty('--primary-bright','black');
        }
    },[light]);


    return(
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="Add_p">
                <p style={{color:`var(--primary-bright)`}}>Register Patient &nbsp; &nbsp;<span>+</span></p>
            </div>
            <div className="Nav">
                <Link to='/Healer-Dashboard' style={{color:`var(--primary-bright)`,textDecoration:'none'}}>
                    <div className="cats"  style={(currpath == '/Healer-Dashboard')?styleForCurr:{}}>
                        <CiGrid41 id="icon"/>
                        <p style={{opacity:1}}>Overview</p>
                    </div>
                </Link>
                <Link to='/Leave' style={{color:`var(--primary-bright)`,textDecoration:'none'}}>
                    <div className="cats" style={(currpath == '/Leave')?styleForCurr:{}}>
                        <CiTimer id="icon"/>
                        <p>Leave Request</p>
                    </div>
                </Link>
                <Link to='/Doctors' style={{color:`var(--primary-bright)`,textDecoration:'none'}}>
                    <div className="cats" style={(currpath == '/Doctors')?styleForCurr:{}}>
                        <CiStethoscope id="icon"/>
                        <p>Doctors</p>
                    </div>
                </Link>
                <Link style={{color:`var(--primary-bright)`,textDecoration:'none'}}>
                    <div className="cats" style={(currpath == '/Patients')?styleForCurr:{}}>
                        <CiMedicalCross id="icon"/>
                        <p>Patients</p>
                    </div>
                </Link>
                <Link  to='/Departments'style={{color:`var(--primary-bright)`,textDecoration:'none'}}>
                    <div className="cats" style={(currpath == '/Departments')?styleForCurr:{}}>
                        <CiBoxList id="icon"/>
                        <p>Departments</p>
                    </div>
                </Link>
                {/* <Link style={{color:`var(--primary-bright)`,textDecoration:'none'}}>
                    <div className="cats" style={(currpath == '/History')?styleForCurr:{}}>
                        <CiClock2 id="icon"/>
                        <p>History</p>
                    </div>
                </Link> */}
            </div>
            <div className="modes">
                <div className="mode" onClick={()=>{setLight(1)}}>
                    <BsSun id="icon"/>
                </div>
                <div className="mode" onClick={()=>{setLight(0)}}>
                    <BsMoon id="icon"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar