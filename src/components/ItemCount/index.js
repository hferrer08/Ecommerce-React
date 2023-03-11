import React, {useState} from 'react';


function ItemCount({ stock, onAdd}) {

const [count, setCount] = useState (0);

const decrease = () => {
    setCount(count - 1);
}

const increase = () => {
    setCount(count +1 );
   
}

return(
<div>
<button disabled ={count<=0 } onClick={decrease}> -</button>
<span className="text-light"> {count} </span>
<button disabled={count>=stock}  onClick={increase }> +</button>
<button disabled={stock<=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>

</div>
);

}

export default ItemCount;