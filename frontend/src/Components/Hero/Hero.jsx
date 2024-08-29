import React from 'react'
import './Hero.css'
import p from '../Assets/plumber.jpeg'
import e from '../Assets/mechanic.jpg'
import  m from '../Assets/electrician.jpeg'
import { Link } from 'react-router-dom'
const Hero = () => {
  const handleNavigate = () => {
    window.location.href = 'http://localhost:5173/addproduct'; // Assuming admin runs on port 3001
  };
  return (
    <div>
        
      <section
        className="hero"
        aria-label="home"
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 hero-title">"Connect Local" Where locals meet services</h1>
            <p className="hero-text">
              From home repairs to tutoring services, find the expertise you need right in your neighborhood. Join ConnectLocal and unlock the potential of local connections.
            </p>
            <div className="btn-wrapper">
              <Link to='Services' className="btn btn-primary">Explore Now</Link>
              <a onClick={handleNavigate} className="btn btn-primary">Join as Service provider</a>
            </div>
          </div>

          <div className="hero-slider" data-slider>
            <div className="slider-inner">
              <ul className="slider-container" data-slider-container>
                <li className="slider-item">
                  <figure className="img-holder" style={{ '--width': 0, '--height': 0 }}>
                    <img src={e} width="575" height="550" alt="" className="img-cover" />
                  </figure>
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Hero
