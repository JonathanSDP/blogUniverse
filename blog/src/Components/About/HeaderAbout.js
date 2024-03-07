import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../CSS/Header.css";

const Header = () => {
  return (
        <div className='home-head-container'>
            <nav className='nav-homebar'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Products">Products</a></li>
                </ul>
            </nav>
        <Outlet />
    </div>
    
  )
}

export default Header