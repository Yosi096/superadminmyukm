import React from 'react'
import Menu from './Menu'
import logo from '../../components/image/logo.svg'

function Header() {
  
  return (
    <div className="header bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <img className="navbar-brand" to="/" src={logo} width="10%" alt="" loading="lazy"/>
        <Menu/>
      </nav>
    </div>
  )
}

export default Header
