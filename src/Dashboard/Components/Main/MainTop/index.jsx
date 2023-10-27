import React,{useState} from "react";
import { Doughnut } from 'react-chartjs-2';
import {CiUser} from 'react-icons/ci'
import {CiStethoscope} from 'react-icons/ci'
import DateAndTime from "./DateAndTime";
import Number from "../../../../Number";
import 'chart.js/auto';



const MainTop = () =>{
    const [chartData, setChartData] = useState({
        datasets: [
          {
            data: [500, 300],
            backgroundColor: ['rgb(49, 185, 190)', 'rgb(131, 138, 151)', 'rgb(49, 185, 190)'],
            hoverBackgroundColor:['rgba(49, 185, 190,0.5)', 'white', 'rgba(49, 185, 190,0.5)'],
            tension: 0.1,
            fill:true
          },
        ],
      });
      const [options, setOptions] = useState({
        plugins: {
            
          }
      });
    return(
        <div className="top">
                <div className="box pat">
                    <div className="icon">
                        <CiUser/>
                    </div>
                    <div className="detail">
                        <h1><Number n = {400}/></h1>
                        <p>Patient's</p>
                    </div>
                </div>
                <div className="box Sta">
                <div className="icon">
                        <CiStethoscope/>
                    </div>
                    <div className="detail">
                        <h1><Number n = {300}/></h1>
                        <p>Staff's</p>
                    </div>
                </div>
                <div className="box Rev">
                    <div style={{aspectRatio:"1/1",width:"clamp(100px,7vw,15vw)"}}>
                        <Doughnut data={chartData} options={options} style={{padding:"10px",height:"clamp(3px,5vw,5vw)",aspectRatio:"1/1"}}/>
                    </div>
                    <div className="desc">
                        <div>
                        <div className="dot"></div>
                        <p>patients</p>
                        </div>
                        <div>
                        <div className="dot" style={{background:"rgb(131, 138, 151)"}}></div>
                        <p>Doctors</p>
                        </div>
                    </div>
                </div>
                {/* <div className="box">

                </div> */}
                <div className="box Rep">
                    <DateAndTime/>
                </div>
            </div>
    )
}

export default MainTop