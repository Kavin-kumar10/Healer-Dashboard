import React,{useContext} from "react";
import './Dashboard.scss';
import Header from './Components/Header'
import Sidebar from "../Sidebar";
import Main from './Components/Main';
import { ListContext } from "../ListContext";
import Preloader from '../Preloader/index'


const Dashboard = () =>{
    const [Users,setUsers,isLoading] = useContext(ListContext);

    return(
        (isLoading)?<Preloader/>:
        <div className="Dashboard">

            <Header/>
            <Sidebar/>
            <Main/>

        </div>
    )
}

export default Dashboard