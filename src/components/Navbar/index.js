import React from "react";
import Cartwidget from "../Cartwidget";

function Navbar(){
    return (
   
        <div className="container-fluid bg-dark">
            <div className="container bg-dark">
            
            <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <Cartwidget /> 
    <a className="navbar-brand text-muted" href="#">Ecommerce videojuegos</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">  </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Figuras y juguetes</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorías
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">PS5</a></li>
            <li><a className="dropdown-item" href="#">Xbox Series</a></li>
            <li><a className="dropdown-item" href="#">Nintendo Switch</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>


        </div>
    )

}
export default Navbar