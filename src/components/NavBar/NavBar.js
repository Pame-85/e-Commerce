import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {
  return (
    <div className="menu-navbar-container">
    <h1 className='menu-title'>Mi tienda Online</h1>
    <ul className='menu-items'>
      <li key="1">
        <a href="" className='menu-list'>Productos</a>
      </li>
      <li key="2">
        <a href=""className='menu-list'>Buscar</a>
      </li>
      <li key="3">
        <a href=""className='menu-list'>Mis Pedidos</a>
      </li>
      </ul>
    <CartWidget/>
  </div>
  )
}

export default NavBar