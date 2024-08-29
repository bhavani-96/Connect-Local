import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png';
import insta from '../Assets/instagram.png';
import whatsapp from '../Assets/WhatsApp.svg';
import pinterest from '../Assets/Pinterest-logo.png'; 
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <br></br>
        <ul className='footer-links'>
          <li>Company</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={insta} alt=""/>
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp} alt=""/>
          </div>
          <div className="footer-icons-container">
            <img src={pinterest} alt=""/>
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>© 2024 All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
