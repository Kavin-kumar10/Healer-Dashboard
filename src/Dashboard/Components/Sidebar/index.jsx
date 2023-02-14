import React from "react";
import './sidebar.scss';
import logo from '../../../Assets/logo.png';
import {MdOutlineDashboardCustomize} from 'react-icons/md'
import {BsSun,BsMoon} from 'react-icons/bs'
import {CiMedicalCross,CiStethoscope,CiBoxList,CiSettings,CiClock2} from 'react-icons/ci';
import {AiOutlineHistory} from 'react-icons/ai'

const sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="Add_p">
                <p>Register Patient &nbsp; &nbsp;<span>+</span></p>
            </div>
            <div className="Nav">
                <div className="cats">
                    <MdOutlineDashboardCustomize id="icon"/>
                    <p>Overview</p>
                </div>
                <div className="cats">
                    <CiStethoscope id="icon"/>
                    <p>Doctors</p>
                </div>
                <div className="cats">
                    <CiMedicalCross id="icon"/>
                    <p>Patients</p>
                </div>
                <div className="cats">
                    <CiBoxList id="icon"/>
                    <p>Departments</p>
                </div>
                <div className="cats">
                    <CiClock2 id="icon"/>
                    <p>History</p>
                </div>
                <div className="cats">
                    <CiSettings id="icon"/>
                    <p>Settings</p>
                </div>
            </div>
            <div className="modes">
                <div className="mode">
                    <BsSun id="icon"/>
                </div>
                <div className="mode">
                    <BsMoon id="icon"/>
                </div>
            </div>
        </div>
    )
}

export default sidebar