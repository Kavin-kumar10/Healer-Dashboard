import React,{useState,useEffect, useContext} from "react";
import Sidebar from "../Sidebar";
import './Doctors.scss';
import Profiles from "./Components/Profiles";
import { ListContext } from "../ListContext";

const Doctors = () =>{
    const [Users,setUsers] = useContext(ListContext);
    console.log(Users);
    return(
        <div className="Doctors">
            <Sidebar/>
            <div className="headDoc">
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