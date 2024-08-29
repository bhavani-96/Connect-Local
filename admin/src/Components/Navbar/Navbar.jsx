import React, { useRef,useState } from 'react' 
import './Navbar.css'
import logo from '../assets/logo.png';
import profile from '../assets/pr.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu-icon" >
            &#9776;
        </div>
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="profile">
          <img src={profile} alt="profile" width="80" height="50"/>
          
        </div>
        
        
    </div>
  
  )
}

export default Navbar;
