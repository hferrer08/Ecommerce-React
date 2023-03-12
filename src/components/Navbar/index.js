import React from "react";
import Cartwidget from "../Cartwidget";
import {Link} from 'react-router-dom'

function Navbar(){
    return (
   
       
            <div className="container-fluid bg-dark ">
            
            <nav className="navbar navbar-expand-lg bg-secondary  ">
            
           
  <Link to='/' className="navbar-brand h1 text-dark" >HF-Videojuegos</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">  </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active text-light" aria-current="page" >Inicio</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link dropdown-toggle text-white" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Figuras y juguetes
                    </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorías
          </a>
          <ul className="dropdown-menu">
            <li><Link className="nav-link" to='/categoria/ps4'>PS4</Link></li>
    
            <li><Link className="nav-link" to='/categoria/switch'>Nintendo switch</Link></li>
          </ul>
          </li>
          
         
          
          
      </ul>

      <span class="navbar-text ">
      
          <Link to='/cart'> <Cartwidget /> </Link>
          
    </span>
    </div>
  
</nav>
            </div>


        
    )

}
export default Navbar