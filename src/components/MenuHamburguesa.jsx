import React from 'react';
import './hojadeestilos.css';

const MenuHamburguesa = ({ isOpen }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'active' : ''}`}>
      <div className="hamb"></div>
      <div className="hamb"></div>
      <div className="hamb"></div>
    </div>
  );
};

export default MenuHamburguesa;
