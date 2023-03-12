import {React, useContext} from "react";
import {useEffect, useState} from 'react';
//import {traerDatosPorIdProducto} from "../../data/data";
import {getFirestore, doc, getDoc} from 'firebase/firestore';

import Spinner from "../Spinner";
import ItemDetails from "../ItemDetails";
import {useParams} from 'react-router-dom'

// 1- Traer el servicio de firestore
// 2- Crear un ountero al dato que queremos traer
//3- Traer el dato con una promesa

function ItemDetailContainer(){

    const [data,setData]=useState({})
    const[loading, setLoading]=useState(true)
    const {idProducto} = useParams ()

    
  
    useEffect(()=>{
      
      
        //traerDatosPorIdProducto('0HcL7Upfw97LKPlE5ZcJ')
        const querydb=getFirestore();
        const queryDoc = doc(querydb, 'products', idProducto);
        getDoc(queryDoc)
        .then((resp)=>setData({id:resp.id, ...resp.data()}))
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