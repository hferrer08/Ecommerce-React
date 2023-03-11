import React from "react";
import { useCartContext } from "../../context/CartContext";


function Cartwidget(){

const {totalProducts} =useCartContext();


    if(totalProducts() >0){
        return(
            <div className="col-md-4 text-light h2">
<i className="bi bi-cart-check">{totalProducts()}</i>

</div>
)
    }else{
        return(
            <div className="col-md-4 text-light h2">
<i className="bi bi-cart-check"></i>

</div>
)  
    }


}

export default Cartwidget