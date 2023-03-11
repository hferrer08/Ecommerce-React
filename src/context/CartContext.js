import React,{useState, useContext, useEffect} from "react";

 const CartContext = React.createContext([]);
//Funcion para ahorrar importar el context
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
//Carrito
const [cart, setCart] = useState([]);

//Agregar al carrito


useEffect(() => {
  console.log("Carrito actualizado:", cart);
}, [cart]);

const addProduct = (item, newQuantity) => {
    const existingProduct = cart.find(product => product.id === item.id);
  
    if (existingProduct) {
      existingProduct.quantity += newQuantity;
      setCart([...cart]);
    } else {
      const newProduct = { ...item, quantity: newQuantity };
      setCart([...cart, newProduct]);
    }
  };
//LimpiarCarrito
const clearCart = () => setCart([]);

//Validar si el item esta en el Carrito, no items duplicados
const isInCart = (id) => cart.find(product => product.id = id) ? true : false ;

//Eliminar del carrito
const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

//price total
const totalPrice = () => {
    return cart.reduce((prev,act) => prev + act.quantity * act.price, 0);
}
//Total de productos en el cart
const totalProducts = () => cart.reduce((acumulador, productoActual)=> acumulador + productoActual.quantity, 0)


    return(
        <CartContext.Provider value=
        {{clearCart, isInCart, removeProduct, addProduct, totalPrice, totalProducts, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;