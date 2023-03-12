import React from "react";
import { useCartContext } from "../../context/CartContext";
import './Cartwidget.css'


function Cartwidget(){

const {totalProducts} =useCartContext();


    if(totalProducts() >0){
        return(
            <div className=" text-light">

<i class="bi bi-cart-check-fill">{totalProducts()}</i>

</div>
)
    }else{
        return(
            <div className=" col-12 text-light h3 ">
<i className="bi bi-cart-check"></i>

</div>
)  
    }


}

export default Cartwidget