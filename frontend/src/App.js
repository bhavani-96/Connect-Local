import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reviews from './Pages/Reviews';
import Services from './Pages/Services';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Loginsignup from './Pages/Loginsignup';
import ServiceCategory from './Pages/ServiceCategory';
import Product from './Pages/Product';
// import Footer from './Components/Footer/Footer'; // Correct import path
// Importing images
import plumber_banner from './Components/Assets/plumber.jpeg';
import mechanic_banner from './Components/Assets/mechanic.jpg';
import electrician_banner from './Components/Assets/electrician.jpeg';
import rmp_banner from './Components/Assets/rmp.jpeg';
import barber_banner from './Components/Assets/barber1.jpg';
import milk_banner from './Components/Assets/milk vendor.webp';
import painter_banner from './Components/Assets/painter1.jpeg';
import tailor_banner from './Components/Assets/tailor1.jpeg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Plumber" element={<ServiceCategory banner={plumber_banner} category="plumber" />} />
          <Route path="/Electrician" element={<ServiceCategory banner={electrician_banner} category="electrician" />} />
          <Route path="/Mechanic" element={<ServiceCategory banner={mechanic_banner} category="mechanic" />} />
          <Route path="/RMP" element={<ServiceCategory banner={rmp_banner} category="RMP" />} />
          <Route path="/Barber" element={<ServiceCategory banner={barber_banner} category="barber" />} />
          <Route path="/Milkvendor" element={<ServiceCategory banner={milk_banner} category="milk vendor" />} />
          <Route path="/Painter" element={<ServiceCategory banner={painter_banner} category="painter" />} />
          <Route path="/Tailor" element={<ServiceCategory banner={tailor_banner} category="tailor" />} />
          <Route path="/Reviews" element={<Reviews />} />
          
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/Profile" element={<Profile />}>
            <Route path=":yourBookings" element={<Profile />} />
          </Route>
          <Route path="/Login" element={<Loginsignup />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
