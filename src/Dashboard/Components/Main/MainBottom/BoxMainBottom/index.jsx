import React from "react";
import './BoxMainBottom.scss'
import {MdOutlineBed} from 'react-icons/md'
import { CiMedicalCase,CiUser } from "react-icons/ci";
import {TfiAlert} from 'react-icons/tfi'

const BoxMainBottom = (props) => {
    return(
        <div className="BoxMainBottom">
            {props.icon == "Bed"?(<MdOutlineBed size={60} id="icon"/>):props.icon == "Medicine" ? (<CiMedicalCase size={60} id="icon"/>):
            props.icon == "Emergency"?(<TfiAlert size={60} id="icon"/>):(<CiUser size={60} id="icon"/>)}
            <p style={{opacity:"0.5"}}>{props.head}</p>
            <h1>{props.val}</h1>
        </div>
    )
}

export default BoxMainBottom