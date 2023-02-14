import React from "react";
import {RiHotelBedLine} from 'react-icons/ri'
import {CiStethoscope} from 'react-icons/ci'
import './main.scss';

const main = () =>{
    
    return(
        <div className="main">
            <div className="top">
                <div className="box pat">
                    <div className="icon">
                        <RiHotelBedLine/>
                    </div>
                    <div className="detail">
                        <h1>700</h1>
                        <p>Patient's</p>
                    </div>
                </div>
                <div className="box Sta">
                <div className="icon">
                        <CiStethoscope/>
                    </div>
                    <div className="detail">
                        <h1>300</h1>
                        <p>Staff's</p>
                    </div>
                </div>
                <div className="box Rep">
                
                </div>
                <div className="box Rev">

                </div>
            </div>
        </div>
    )
}

export default main