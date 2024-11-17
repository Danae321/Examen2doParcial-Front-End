import React from "react";
import { Link } from 'react-router-dom';
import './hojadeestilos.css';

const Servicios1 = () => {
    return (
        <section id="servicios" className="seccion">
            <div className="container">
                <div className="fila">
                    <div className="columna columna-33">
                    <div class="bloque-servicio1">
                            <h3>Dedicada a su buena salud</h3>
                            <p>Su bienestar depende de una buena salud. Mi trabajo consiste en asegurarme de que su cuerpo se encuentre en las mejores condiciones posibles. Mi objetivo es permitirle moverse libremente y sin dolor. Cuento con un título universitario en áreas afines y capacitación avanzada.</p>
                        </div>
                    </div>

                    <div className="columna columna-33">
                        <div className="bloque-servicio">
                            <form>
                                <input type="text" id="nombre" name="nombre" placeholder="Nombre:" required />
                                <input type="email" id="correo" name="correo" placeholder="Correo:" required />
                                <input type="tel" id="telefono" name="telefono" placeholder="Teléfono:" required />
                                <textarea id="mensaje" name="mensaje" placeholder="Mensaje:" required></textarea>
                                <button type="submit" className="boton boton-roja">Enviar mensaje</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servicios1;
