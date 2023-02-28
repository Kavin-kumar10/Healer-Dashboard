import React,{useState,useEffect, useContext} from "react";
import Sidebar from "../Sidebar";
import './Doctors.scss';
import Profiles from "./Components/Profiles";
import { ListContext } from "../ListContext";
import Preloader from "../Preloader";

const Doctors = () =>{
    const [Users,setUsers,isLoading] = useContext(ListContext);
    console.log(Users);
    return(
        (isLoading)?<Preloader/>:
        <div className="Doctors">
            <Sidebar/>
            <div className="headDoc">
                <div className="headDoc__1">
                    <h2>Doctor's Database</h2>
                    <input type="text" placeholder="eg:- Oliva King / Ortho"/>
                </div>
                <div className="headDoc__2">
                    <button>New Doctor</button>
                </div>
            </div>
            <div className="body">
                {
                    Users?.map((User,index)=>{
                        return(
                            <Profiles User = {User} index = {index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Doctors