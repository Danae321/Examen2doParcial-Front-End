import React from "react";
import { Link } from 'react-router-dom';
import './hojadeestilos.css';
import vertebr from '../images/vertebr.jpg'
const QuienesSomos1 = () => {
    return (
        <section id="quienessomos" className="banner">
            <img src={vertebr} alt="Vertebr" className="vertebr-images" />
            <div class="banner-text">
                <h1>¿Busca un fisioterapeuta?</h1>
                <p>Reserve una consulta gratuita</p>
                <a href="#nosotros" class="boton boton-azul1">Reserve una cita</a>
            </div>
        </section>
    );
};

export default QuienesSomos1;
