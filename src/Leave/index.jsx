import React, { useContext } from "react";
import { ListContext } from "../ListContext";
import Accordion from 'react-bootstrap/Accordion';
import Sidebar from "../Sidebar";
import './Leave.scss'


const Leave = () =>{

    const [Users,setUsers] = useContext(ListContext);

    return(
        <div className="Leave">
            <div className="bodyLeave">
            <div className="header">
                <h2>Leave Request</h2>
            </div>
            <div className="LeaveMain">
            <Accordion defaultActiveKey="1">
            {
                Users.map((User,index)=>{
                    return(
                        <div className="Acc">
                            <Accordion.Item eventKey="1" style={{margin:"40px 0px"}}>
                            <Accordion.Header>
                                <div className="Acc__head">
                                    <p>{User.name}</p>
                                    <div className="btn">
                                        <div className="btn__acc">Accept</div>
                                        <div className="btn__dec">Decline</div>
                                    </div>
                                </div>

                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="Acc_body">
                                    <p>Health Issues</p>
                                    <p>Reason: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, quidem expedita. Expedita magnam consequuntur quae quisquam, non facilis alias perferendis!</p>
                                    <p>Days: 1</p>
                                    <p>Dates: 22/11 to 23/11</p>
                                </div>
                            </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    )
                })
            }
            </Accordion>
            </div>

            </div>
            <Sidebar/>
        </div>
    )
}

export default Leave