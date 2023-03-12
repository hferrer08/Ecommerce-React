import React from "react";
import {useEffect, useState} from 'react';
import traerDatos from "../../data/data";
import Spinner from "../Spinner";
import ItemList from "../ItemList";
import {useParams} from 'react-router-dom'
import {getFirestore, doc, getDoc, collection, getDocs, query, where} from 'firebase/firestore'
//import {traerDatosPorCategoria} from "../../data/data";


function ItemListContainer(){

    const [data,setData]=useState([])
    const[loading, setLoading]=useState(true)
    const {idCategoria} = useParams ()
  
    useEffect(()=>{
      
      if(!idCategoria){
        const querydb = getFirestore();
  const queryCollection = collection(querydb, 'products');
   getDocs(queryCollection)

        .then((resp)=>setData(resp.docs.map(product=> ({id: product.id, ...product.data()}))))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))   
      }else{

        const querydb = getFirestore();
const queryCollection = collection(querydb, 'products');
const queryFilter = query(queryCollection, where('categoria','==',idCategoria))
getDocs(queryFilter)
        .then((resp)=>setData(resp.docs.map(product=>({id: product.id, ...product.data()}))))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false)) 
      }
      
      
      
  
  
    },[idCategoria])

    return (
        <div >
                
        {loading ? <Spinner></Spinner> :  <ItemList productos={data} />}
 
        </div>
        
)
}

export default ItemListContainer