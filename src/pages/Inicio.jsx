import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Servicios1 from '../components/Servicios1'
import QuienesSomos1 from '../components/QuienesSomos1'
import Blog1 from '../components/Blog1'
import MenuHamburguesa from '../components/MenuHamburguesa'
import logo from '../images/logo.png'

const Inicio = () => {
  return (
    <>
        <Header imagenk={logo}></Header>
        <Main ></Main>
        <MenuHamburguesa></MenuHamburguesa>
        <Servicios1></Servicios1>
        <QuienesSomos1></QuienesSomos1>
        <Blog1></Blog1>
    </>
  )
}

export default Inicio
