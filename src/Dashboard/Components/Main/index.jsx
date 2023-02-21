import React, { useState } from "react";
import {CiUser} from 'react-icons/ci'
import {CiStethoscope} from 'react-icons/ci'
import './main.scss';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import MainBottom from "./MainBottom";

const Main = () =>{
    const [chartData, setChartData] = useState({
        datasets: [
          {
            data: [500, 300],
            backgroundColor: ['rgb(49, 185, 190)', 'white', 'rgb(49, 185, 190)'],
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
        <div className="main">
            <div className="top">
                <div className="box pat">
                    <div className="icon">
                        <CiUser/>
                    </div>
                    <div className="detail">
                        <h1>400</h1>
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
                    <div style={{height:"130px",width:"130px"}}>
                        <Doughnut data={chartData} options={options} style={{padding:"10px",height:"7px",width:"7px"}}/>
                    </div>
                    <div className="desc">
                        <div>
                        <div className="dot"></div>
                        <p>patients</p>
                        </div>
                        <div>
                        <div className="dot" style={{background:"white"}}></div>
                        <p>Doctors</p>
                        </div>
                    </div>
                </div>
            </div>
            <MainBottom/>
        </div>
    )
}

export default Main