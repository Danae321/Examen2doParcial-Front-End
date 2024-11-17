import React from "react";
import { Link } from 'react-router-dom';
import './hojadeestilos.css';
import portada from '../images/portada.jpg';

const Inicio = () => {
    return (
        <section id="inicio">
            <img src={portada} alt="Portada" className="portada-images" />
            <div className="bloque-inicio">
                <hr className="linea-horizontal" />
                <h1>ESCUCHE A SU CUERPO</h1>
                <p>Obtenga la atención que necesita de un profesional</p>
                <a href="#nosotros" className="boton boton-azul">Reserve una cita</a>
            </div>
        </section>
    );
};

export default Inicio;
