import React,{useState,useEffect, createContext} from "react";
import axios from "axios";

export const ListContext = createContext();

export const ListProvider = (props) =>{
    const [Users,setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=300')
        .then((response)=>{
            setUsers(response.data.results);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]); 
    return(
        <div>
            <ListContext.Provider value={[Users,setUsers]}>
                {props.children}
            </ListContext.Provider>
        </div>
    )
}