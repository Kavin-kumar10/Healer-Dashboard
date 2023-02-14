import React from "react";
import './Dashboard.scss';
import Header from './Components/Header'
import Sidebar from "./Components/Sidebar";
import Main from './Components/Main';
import Footer from "./Components/Footer";
import SubBar from "./Components/SubBar";

const Dashboard = () =>{
    return(
        <div className="Dashboard">
            <Header/>
            <Sidebar/>
            <Main/>
            <Footer/>
            <SubBar/>
        </div>
    )
}

export default Dashboard