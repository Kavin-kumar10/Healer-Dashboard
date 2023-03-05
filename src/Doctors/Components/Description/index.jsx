import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import { ListContext } from "../../../ListContext";
import Sidebar from "../../../Sidebar";
import './Description.scss'

const Description = () =>{
    const [Users,setUsers,isLoading] = useContext(ListContext);
    const params = useParams();
    // console.log(params.id);
    const User = Users.filter((user)=>user._id == params.id)[0];
    return(
        <div className="Description">
            <Sidebar/>
            <div className="Datas">
                
            </div>
        </div>
    )
}

export default Description