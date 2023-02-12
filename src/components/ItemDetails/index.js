import {React} from 'react'
import './ItemDetail.css'
import { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';



export default function ItemDetails({nombre, imagenGrandeDetalle, id, precio}){
      
   
    return (
        <div className="col-12 d-flex justify-content-center">
        <div className="col-8 ">
          <div className="card  m-2  text-white bg-secondary">
            <div className="card-image">
              <img src={imagenGrandeDetalle} className="CustomImageDetail" />
              
            </div>
            <div className="card-content">
            <h3 className="card-title text-dark no-wrap customCardName">{nombre}</h3>
              <p>Id Producto: {id}</p>
              <p>Precio: {precio} </p>
            </div>
            <div className="card-action">
            <Link to={`/detalle/${id}`}> <button className="btn btn-outline-primary"> Ver Detalles </button> </Link>
            </div>
          </div>
        </div>

     </div>
    );         


    


}