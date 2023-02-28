import React,{useState} from "react";
import { Line } from "react-chartjs-2";
import './MainBottom.scss'
import BoxMainBottom from "./BoxMainBottom";

const MainBottom = () =>{
    const [graph, setGraph] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July","Aug","Sept","Oct","Nov","Dec"],
        datasets: [
          {
            label:'Patient\'s Avg',
            data: [0,360,300,200,250,450,400,450.400,350,300,250,200],
            backgroundColor: ['rgb(49, 185, 190)', 'white', 'rgb(49, 185, 190)'],
            tension: 0.5,
            fill:false,
            borderColor:'rgb(49, 185, 190)'
          },
        ],
      });
      const [options, setOptions] = useState({
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
              }
          },
          
      });
    return(
        <div className="MainBottom">
            <div className="left">
                <Line data={graph} options={options}/>
            </div>
            <div className="right_TL">
                <BoxMainBottom val="200" head="Bed's Available" icon="Bed"/>
            </div>
            <div className="right_TR">
                <BoxMainBottom val="1200" head="Medical Stock" icon="Medicine"/>
            </div>
            <div className="right_BR">
                <BoxMainBottom val="40" head="Emergency Case" icon="Emergency"/>
            </div>
            <div className="right_BL">
                <BoxMainBottom val="90" head="Out Patients" icon="Outpatients"/>
            </div>
        </div>
    )
}

export default MainBottom