import React from "react"
import {Link} from 'react-router-dom'
import './Item.css'

function Item({ id, image, name, precio }){
    
    
    return (


    
        <div className = "card col-md-4 bg-dark">
            <img src={image} class="card-img-top CustomImageCard" alt="..."></img>
            <div className="card-body">
            <h5 className="text-muted"> {name} </h5>
             <p className="text-white"> ID: {id} </p>
             <p className="text-white card-text">Precio: {precio} </p>

             <Link to={`/detalle/${id}`}> <button className="btn btn-outline-primary"> Ver Detalles </button> </Link>
            </div>
            
             
            
             
            
            
        </div>
        

    

)


}

export default Item

