import React from 'react';
import './nvbar.css';  // Importa los estilos CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">La deforestación</a></li>
        <li><a href="#">Volver al juego</a></li>
        <li><a href="#">Salir</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


