import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import m1 from '../assets/m1.jpg';
import b1 from '../assets/b1.jpg';
import c1 from '../assets/c1.jpg';
const HomePage = () => {
    return (
        <div className="container">
            <div className="left-section">
                <h1>Welcome to Your Marketplace – Where Local Service Providers Shine and Communities Flourish.</h1>
                <p className="quote">Grow your business, connect with your community, and thrive together.</p>
                <div className="buttons">
                    <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                    <button> Join as Service Provider</button>
                    </Link>
                </div> 
                <div className="buttons">
                    <button><Link to={'/listproduct'} style={{textDecoration:"none"}}>
                     List of Your Customers 
                    </Link></button>
                </div>
            </div>
            <div className="right-section">
                <img src={m1} alt="Service 1" className="side-image" />
                {/* <img src= {b1}alt="Service 2" className="side-image" />
                <img src={c1} alt="Service 3" className="side-image" /> */}
            </div>
        </div>
    );
};

export default HomePage;
