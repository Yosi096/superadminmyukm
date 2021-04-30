import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import axios from 'axios'

function Menu  () {
  const auth = useSelector(state => state)
  const {user, isLogged} = auth

  const userLink = () => {
    return <li>
      <Link>
        <img src= {user.photo} alt=""/>{user.name}
    </Link>
    </li>
  }

  return (
    <div className="menu">
      <ul className="navbar-nav flex-row">
        <li className={`nav-item px-2`}> 
          <Link className="nav-link" to="/beranda" >Beranda <span className="sr-only">(current)</span></Link>
        </li>

        <li className={`nav-item px-2 `}> 
          <Link className="nav-link" to="/UKM">UKM <span className="sr-only">(current)</span></Link>
        </li>

        <li className={`nav-item px-2 `}> 
          <Link className="nav-link" to="/file">File <span className="sr-only">(current)</span></Link>
        </li>
          {
            isLogged
            ? userLink()
            :<li className={`nav-item px-2 `}><Link className="nav-link" to="/login"><i className="fas fa-user"></i>Login</Link></li>
          }
      </ul>
    </div>
  )
}

export default Menu