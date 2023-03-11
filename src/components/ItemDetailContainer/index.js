import {React, useContext} from "react";
import {useEffect, useState} from 'react';
import {traerDatosPorIdProducto} from "../../data/data";


import Spinner from "../Spinner";
import ItemDetails from "../ItemDetails";
import {useParams} from 'react-router-dom'



function ItemDetailContainer(){

    const [data,setData]=useState({})
    const[loading, setLoading]=useState(true)
    const {idProducto} = useParams ()

    
  
    useEffect(()=>{
      
      
        traerDatosPorIdProducto(idProducto)
        .then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false)) 
      
      
      
      
  
  
    },[idProducto])

    
   
  

    return (
        <div className= "row">
               
        {loading ? <Spinner></Spinner> :  <ItemDetails data={data} />}
        
        </div>
        
    )
}

export default ItemDetailContainer