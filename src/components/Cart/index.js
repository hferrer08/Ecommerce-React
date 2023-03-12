import {React, useState} from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate,Link } from 'react-router-dom';
import ItemCart from "../ItemCart";
import './form.css';
import { getFirestore, addDoc, collection, db } from "firebase/firestore";
import Swal from 'sweetalert2';






function Cart(props){

const {cart, totalPrice} = useCartContext();

const initialState ={
    nombre: "",
    apellido:"",
    direccion:"",
    telefono:"",


};

//Objeto prueba order para la base de datos
/* const order = {
buyer: {
    name: 'Pablo',
    email: 'Pablo@gmail.com',
    phone: '123123',
    address: 'sgsdgshg'
},
items: cart.map(product=>({id:product.id, nombre: product.nombre, price: product.price, quantity: product.quantity})),
total: totalPrice(),


} */

/* const handleClick = () => {
    const db=getFirestore();
    const ordersCollection = collection(db,'orders');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
} */

const [values, setValues] = useState(initialState);
const [orderID, setOrderID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db=getFirestore();
  const docRef = await addDoc(collection(db,"orders"),{
values, 
  });
console.log("Document ID: ",docRef.id)
Swal.fire(
    'Orden guardada',
    `Tu orden ha sido confirmada, tu número de orden es: ${docRef.id}`,
    'success'
  )



setOrderID(docRef.id);
setValues(initialState);
  };

  const handleInputChange = (e) => {
    const {value, name} = e.target;
    setValues({...values, [name]:value});
  };




if(cart.length ===0){

    return(

        <>
        <h3 className="text-light" >No se encuentran productos en el carrito</h3>
        <Link to='/'> <h4> Hacer compras</h4></Link>
        </>
    )

}    

return(

<div className="row d-flex justify-content-center">
<h4 className="text-muted mt-2"> Artículos en el carrito </h4>
{
cart.map(product=> <ItemCart  key={product.id} product={product} /> )
}
<p className=" h2 text-light">
    Total: ${totalPrice()}
</p>


<div className='row d-flex justify-content-center'>
<h4 className="text-muted mt-2"> Datos del comprador </h4>
<form className="form-container mt-2" onSubmit={handleSubmit}>
        <label className='label-form'>
          Nombre:
          <input  name='nombre' className="form-input" type="text" value={values.nombre} onChange={handleInputChange} />
        </label>
        <label className='label-form'>
          Apellido:
          <input  name='apellido' className="form-input" type="text" value={values.apellido} onChange={handleInputChange} />
        </label>
        <label className='label-form'>
          Dirección:
          <input  name='direccion' className="form-input" type="text" value={values.direccion} onChange={handleInputChange} />
        </label>
        <label className='label-form'>
          Número de contacto:
          <input  name='telefono' className="form-input" type="text" value={values.telefono} onChange={handleInputChange} />
        </label>
        <button className="btn waves-effect waves-light" type="submit">
        <i class="bi bi-send-check"></i> Enviar</button>
      </form>

</div>



</div>


    
 



)



}
export default Cart;