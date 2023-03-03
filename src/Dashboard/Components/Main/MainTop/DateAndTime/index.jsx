import React, { useEffect, useState } from "react";
import "./DateAndTime.scss"

const DateAndTime = () =>{
    const [data,setData] = useState('');
    const updateData =setTimeout(() =>{
        setData({time:new Date().toLocaleTimeString(),date:new Date().toLocaleDateString()});
    },1000);

    return(
        <div className="DateAndTime">
            <h1>{data.time}</h1>
            <p>{data.date}</p>
        </div>
    )
}

export default DateAndTime