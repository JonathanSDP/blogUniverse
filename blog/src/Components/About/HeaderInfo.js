import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../CSS/Header.css";

const Header = () => {
  return (
        <div className='home-head-container'>
            <div className='head-t-div'>
              <h1 className='head-title'>The Universe</h1>
            </div>
            <nav className='nav-homebar'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Info">Info</a></li>
                </ul>
            </nav>
        <Outlet />
    </div>
    
  )
}

export default Header