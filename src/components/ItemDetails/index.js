import {React} from 'react'

import { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';



export default function ItemDetails({nombre, image, id, precio}){
      
   
    return (
        <>
        <div>
        <img className="imgCard" src={image} />
           <p className="text-white">{id}</p> 
           <p className="text-white">{nombre}</p> 
           <p className="text-white">{precio}</p> 

        </div>  

     </>
    );         


    


}