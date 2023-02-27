import React from "react";
import Sidebar from '../Sidebar';
import './Departments.scss';

const Departments = () =>{
    return(
        <div className="Departments">
            <Sidebar/>
            <div className="dept dept1">
                <div className="dept1_desc">
                    <h1>Dental</h1>
                </div>
            </div>
            <div className="dept dept2">
                <div className="dept2_desc">
                    <h1>Cardio</h1>
                </div> 
            </div>
            <div className="dept dept3">
                <div className="dept3_desc">
                    <h1>Ophthalmo</h1>
                </div>
            </div>
            <div className="dept dept4">
                <div className="dept4_desc">
                    <h1>Ortho</h1>
                </div>
            </div>
            <div className="dept dept5">
                <div className="dept5_desc">
                    <h1>Psychology</h1>
                </div>
            </div>

        </div>
    )
}

export default Departments