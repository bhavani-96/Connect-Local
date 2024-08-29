import React, { useState, useEffect } from 'react';
import './Listproduct.css';
import Navbar from '../Navbar/Navbar';  // Import the Navbar component

const Listproduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('https://connect-local-backend.onrender.com');
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id })
      });

      // Update the state to remove the deleted product
      setAllProducts(allproducts.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div>
      <Navbar />  {/* Include the Navbar component */}
      <div className='list-product'>
        <h1>ALL PRODUCT LIST</h1>
        <div className="listproduct-format-main">
          <p>Image</p>
          <p>Name</p>
          <p>Profession</p>
          <p>Address</p>
          <p>Price</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
          <hr />
          {allproducts.map((product, index) => (
            <React.Fragment key={index}>
              <div className="listproduct-format-main listproduct-format">
                <img src={product.image} alt="" className="listproduct-product-icon" />
                <p>{product.name}</p>
                <p>{product.category}</p>
                <p>{product.address}</p>
                <p>${product.price}</p>
                <p onClick={() => removeProduct(product.id)} className="listproduct-remove-icon">❌</p>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listproduct;
