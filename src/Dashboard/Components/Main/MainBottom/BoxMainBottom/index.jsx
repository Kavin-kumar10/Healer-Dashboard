import React from "react";
import './BoxMainBottom.scss'
import {MdOutlineBed} from 'react-icons/md'
import { CiMedicalCase,CiUser } from "react-icons/ci";
import {TfiAlert} from 'react-icons/tfi'

const BoxMainBottom = (props) => {
    return(
        <div className="BoxMainBottom">
            <div className="contain">
                {props.icon == "Bed"?(<MdOutlineBed size={70} id="icon"/>):props.icon == "Medicine" ? (<CiMedicalCase size={70} id="icon"/>):
                props.icon == "Emergency"?(<TfiAlert size={70} id="icon"/>):(<CiUser size={70} id="icon"/>)}
            </div>
            <div className="detail">
                <h1>{props.val}</h1>
                <p style={{opacity:"0.5"}}>{props.head}</p>
            </div>
        </div>
    )
}

export default BoxMainBottom