import Item from "../Item";

function ItemList({productos}){

    return (
        <div className="row">
            {productos.map((producto) => {
                return (
                    <Item key={producto.id} 
                    id={producto.id}
                     image={producto.image}
                      name={producto.nombre}
                       price={producto.price}>
                       
                    </Item>
                
            
                );
                        
                })} 
            </div>  
    );     
            
}
       
export default ItemList