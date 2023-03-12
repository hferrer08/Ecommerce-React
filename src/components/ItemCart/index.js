import React from 'react';
import { useCartContext } from '../../context/CartContext';


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    return(
        <div className="col-3 d-flex justify-content-center">
        
          <div className="card  m-2  text-white bg-secondary">
            <div className="card-image">
              <img src={product.image} className="CustomImageCard" ></img>
              
            </div>
            <div className="card-content">
            <h3 className="card-title text-dark no-wrap customCardName">{product.nombre}</h3>
              
              <p>Precio unitario: {product.price} </p>
              <p>Subtotal: ${product.quantity * product.price} </p>
              <button class="btn waves-effect waves-light" onClick={()=> removeProduct(product.id)}> <i class="bi bi-trash-fill"></i> Eliminar </button>

             
            </div>
            
          </div>
          
        

     </div>
    )
}

export default ItemCart;