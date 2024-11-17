import React from "react";
import { Link } from 'react-router-dom';
import './hojadeestilos.css';
import fisio from '../images/fisio.jpg'

const Blog1 = () => {
    return (
        <section id="blog" className="about-section">
            <div className="image-container">
            <img src={fisio} alt="Fisio" className="fisio-images" />
            </div>
            <div class="text-container">
                <h2>Acerca de mí</h2>
                <p>Me esfuerzo por mejorar su calidad de vida.</p>
                <p>La fisioterapia es un método activo, centrado en el ejercicio, para eliminar el dolor, curar lesiones y facilitar la rehabilitación. Mi objetivo es que vuelvas a moverte, mejorar tu fuerza y ​​aumentar tu flexibilidad. Mi objetivo es recuperar y mejorar el movimiento después de una lesión o cirugía mediante ejercicios terapéuticos, educación y consejos sobre el estilo de vida.</p>
                <button type="submit" class="boton boton-roja">Leer más</button>
            </div>
        </section>
    );
};

export default Blog1;
