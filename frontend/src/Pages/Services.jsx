import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import mlogo from '../Components/Assets/mechaniclogo.png';
import elogo from '../Components/Assets/electricianlogo.png';
import plogo from '../Components/Assets/plumberlogo.png';
import tlogo from '../Components/Assets/tailorlogo.png';
import rlogo from '../Components/Assets/rmp.jpeg';
import milklogo from '../Components/Assets/milk vendor.webp';
import blogo from '../Components/Assets/barberlogo.png';
import painterlogo from '../Components/Assets/painterlogo.png';

const Services = () => {
  return (
    <div>
      <div id="services">
        <section className="section service" aria-labelledby="service-label">
          <div className="container">
            <p className="section-subtitle" id="service-label">What We Do?</p>
            <h2 className="h2 section-title">
              Navigate through our seamless platform and find the services that align perfectly with your requirements. Experience convenience like never before.
            </h2>
            <ul className="grid-list">
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img src={plogo} style={{'--width': 10, '--height': 0}} alt="Plumber Logo"/>
                  </div>
                  <h3 className="h4 card-title">Plumber</h3>
                  <p className="card-text"></p>
                  <Link to="/Plumber" className="btn-text">
                    <span className="span">Learn More</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img src={mlogo} alt="Mechanic Logo"/>
                  </div>
                  <h3 className="h4 card-title">Mechanic</h3>
                  <p className="card-text"></p>
                  <Link to="/Mechanic" className="btn-text">
                    <span className="span">Learn More</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img src={rlogo} alt="RMP Doctor Logo"/>
                  </div>
                  <h3 className="h4 card-title">RMP Doctor</h3>
                  <p className="card-text"></p>
                  <Link to="/RMP" className="btn-text">
                    <span className="span">Learn More</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img src={elogo} alt="Electrician Logo"/>
                  </div>
                  <h3 className="h4 card-title">Electrician</h3>
                  <p className="card-text"></p>
                  <Link to="/Electrician" className="btn-text">
                    <span className="span">Learn More</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img src={blogo} alt="Barber Logo"/>
                  </div>
                  <h3 className="h4 card-title">Barber</h3>
                  <p className="card-text"></p>
                  <Link to="/Barber" className="btn-text">
                    <span className="span">Learn More</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img src={milklogo} alt="Milk Vendor Logo"/>
                  </div>
                  <h3 className="h4 card-title">Milk Vendor</h3>
                  <p className="card-text"></p>
                  <Link to="/Milkvendor" className="btn-text">
                    <span className="span">Learn More</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img src={painterlogo} alt="Painter Logo"/>
                  </div>
                  <h3 className="h4 card-title">Painter</h3>
                  <p className="card-text"></p>
                  <Link to="/Painter" className="btn-text">
                    <span className="span">Learn More</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="service-card">
                  <div className="card-icon">
                    <img src={tlogo} alt="Tailor Logo"/>
                  </div>
                  <h3 className="h4 card-title">Tailor</h3>
                  <p className="card-text"></p>
                  <Link to="/Tailor" className="btn-text">
                    <span className="span">Learn More</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
