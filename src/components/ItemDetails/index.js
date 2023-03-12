import {React} from 'react'
import './ItemDetail.css'
import { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import { useCartContext } from '../../context/CartContext';



export default function ItemDetails({data}){
    //Carrito
    const [goToCart, setGoToCart] = useState(false); 
    //Destructuración del context, solo quiero usar el addProduct
    const {addProduct} = useCartContext();

  //Cantidad del carrito
  const onAdd = (quantity) => {
      //  console.log(`Compraste ${quantity} unidades`)
      setGoToCart(true);
      addProduct(data, quantity);
      
      }
   
    return (
        <div className="col-12 d-flex justify-content-center">
        <div className="col-8 ">
          <div className="card  m-2  text-white bg-secondary">
            <div className="card-image">
            {console.log(data.imagenGrandeDetalle)}
              <img src={data.imagenGrandeDetalle} className="CustomImageDetail" ></img>
              
            </div>
            <div className="card-content">
            <h3 className="card-title text-dark no-wrap customCardName">{data.nombre}</h3>
            <p> {data.desc}</p>
             
              <p>price: {data.price} </p>
              <p>Stock: {data.stock} </p>

              {goToCart? <Link className='text-TerminarCompras' to='/cart'> Terminar compra</Link>
              :
              <ItemCount initial={0} stock={data.stock} onAdd={onAdd} />
            }
              
            </div>
            
          </div>
          
        </div>

     </div>
    );         


    


}