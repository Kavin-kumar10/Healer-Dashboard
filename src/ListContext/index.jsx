import React,{useState,useEffect, createContext} from "react";
import axios from "axios";

export const ListContext = createContext();

export const ListProvider = (props) =>{
    const [Users,setUsers] = useState([])
    const [isLoading,setIsloading] = useState(true);
    useEffect(()=>{
        axios.get('http://localhost:5000/api/get')
        .then((response)=>{
            setUsers(response.data);
            setIsloading(false);
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]); 
    return(
        <div>
            <ListContext.Provider value={[Users,setUsers,isLoading]}>
                {props.children}
            </ListContext.Provider>
        </div>
    )
}