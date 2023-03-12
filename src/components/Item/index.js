import React from "react"
import {Link} from 'react-router-dom'
import './Item.css'

function Item({ id, image, name, price }){
    
    
    return (

        
        <div className="col-3 ">
          <div className="card  m-2  text-white bg-secondary">
            <div className="card-image">
              <img src={image} className="CustomImageCard" />
              
            </div>
            <div className="card-content">
            <h3 className="card-title text-dark no-wrap customCardName">{name}</h3>
             
              <p>price: {price} </p>
            </div>
            <div className="card-action">
            <Link to={`/detalle/${id}`}> <button className="btn btn-outline-primary"> <i class="bi bi-search"></i> Ver Detalles </button> </Link>
            </div>
          </div>
        </div>
    
    
        

    

)


}

export default Item

