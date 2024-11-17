import React from 'react'
import Header from '../components/Header'
import logo from '../images/logo.png'
import Blog1 from '../components/Blog1'
import Footer from '../components/Footer'
const Blog = () => {
  return (
    <>
        <Header imagenk={logo}></Header>
        <Blog1></Blog1>
        <Footer></Footer>
    </>
  )
}

export default Blog