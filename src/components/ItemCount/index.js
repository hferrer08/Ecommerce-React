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
<div className="p-2 d-flex flex-column">
    <div><button className="btn btn-warning btn-sm" disabled ={count<=0 } onClick={decrease}> <i class="bi bi-patch-minus "></i></button>
<span className="text-light "> {count} </span>
<button className="btn btn-primary btn-sm" disabled={count>=stock}  onClick={increase }> <i class="bi bi-patch-plus"></i></button></div>
<div >
<button className='mt-2 btn btn-primary' disabled={stock<=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
</div>
</div>
);

}

export default ItemCount;