import React from 'react';
import { useCartContext } from '../../context/CartContext';


const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    return(
        <div className="col-12 d-flex justify-content-center">
        <div className="col-8 ">
          <div className="card  m-2  text-white bg-secondary">
            <div className="card-image">
              <img src={product.imagenGrandeDetalle} className="CustomImageDetail" ></img>
              
            </div>
            <div className="card-content">
            <h3 className="card-title text-dark no-wrap customCardName">{product.nombre}</h3>
              <p>Id Producto: {product.id}</p>
              <p>Precio unitario: {product.price} </p>
              <p>Subtotal: ${product.quantity * product.price} </p>
              <button onClick={()=> removeProduct(product.id)}>Eliminar</button>

             
            </div>
            
          </div>
          
        </div>

     </div>
    )
}

export default ItemCart;