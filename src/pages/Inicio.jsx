import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import MenuHamburguesa from '../components/MenuHamburguesa'
import logo from '../images/logo.png'

const Inicio = () => {
  return (
    <>
        <Header imagenk={logo}></Header>
        <Main ></Main>
        <MenuHamburguesa></MenuHamburguesa>
    </>
  )
}

export default Inicio