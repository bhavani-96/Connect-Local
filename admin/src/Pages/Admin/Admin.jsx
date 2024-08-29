import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../Components/Homepage/Homepage';
import Addproduct from '../../Components/Addproduct/Addproduct';
import Listproduct from '../../Components/Listproduct/Listproduct'; // Ensure this import is correct
import './Admin.css';

const Admin = () => {
  return (
    <div className='admin'>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/listproduct" element={<Listproduct />} />
        </Routes>
      
    </div>
  );
};

export default Admin;
