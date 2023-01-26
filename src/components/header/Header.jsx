import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <nav>
        <div className="container">
            <ul className="nav-wrapper">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/'>Setting</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Header