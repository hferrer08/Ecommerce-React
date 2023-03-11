import React from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate,Link } from 'react-router-dom';
import ItemCart from "../ItemCart";
function Cart(props){

const {cart, totalPrice} = useCartContext();
if(cart.length ===0){

    return(

        <>
        <h3 >No se encuentran productos en el carrito</h3>
        <Link to='/'>Hacer compras</Link>
        </>
    )

}    

return(

<>
{
cart.map(product=> <ItemCart key={product.id} product={product} /> )
}
<p className="text-light">
    total: {totalPrice()}
</p>
</>


)



}
export default Cart;