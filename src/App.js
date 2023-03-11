import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
        <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<h1 className='text-white'>Pagina en construccion, en este momento no hay productos</h1>} />
        
      </Routes>   
      </CartProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
