import React, { useState } from "react";
import './hojadeestilos.css';
import logo from '../images/logo.png'

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false);

    const toggleMenu = () => setActiveMenu(!activeMenu);

    return (
        <header >
            <div className="container" >
            <img src={logo} alt="logo" className="logo" />
                <nav className={activeMenu ? 'active' : ''} >
                    <a href="/">INICIO</a>
                    <a href="/servicios">SERVICIOS</a>
                    <a href="/qui">QUIÉNES SOMOS</a>
                    <a href="/blog">BLOG</a>
                </nav>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    <div className="hamb"></div>
                    <div className="hamb"></div>
                    <div className="hamb"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
