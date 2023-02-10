import React from "react";
import {useEffect, useState} from 'react';
import traerDatos from "../../data/data";
import Spinner from "../Spinner";
import ItemList from "../ItemList";
import {useParams} from 'react-router-dom'
import {traerDatosPorCategoria} from "../../data/data";


function ItemListContainer(){

    const [data,setData]=useState([])
    const[loading, setLoading]=useState(true)
    const {idCategoria} = useParams ()
  
    useEffect(()=>{
      
      if(!idCategoria){
        traerDatos
        .then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))   
      }else{

        traerDatosPorCategoria(idCategoria)
        .then((resp)=>setData(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false)) 
      }
      
      
      
  
  
    },[idCategoria])

    return (
        <div class="row">
                
        {loading ? <Spinner></Spinner> :  <ItemList productos={data} />}
 
        </div>
        
)
}

export default ItemListContainer