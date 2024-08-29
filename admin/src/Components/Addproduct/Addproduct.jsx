import React, { useState } from 'react';
import './Addproduct.css';
import upload_area from '../../Components/assets/upload.jpg';
import Navbar from '../Navbar/Navbar'; // Adjust the path based on your folder structure

const Addproduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    price: "",
    address: "", // Added to match backend schema
    description: "", // Added to match backend schema
    phone: "", // Added to match backend schema
    user: "Anonymous", // Default value or set based on your app logic
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    try {
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      responseData = await response.json();
      console.log('Response Data:', responseData); // Log the response data for debugging

      if (responseData.success) {
        product.image = responseData.image_url;
        console.log('Product with Image URL:', product);
        await fetch('http://localhost:4000/addproduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        }).then((resp) => resp.json()).then((data) => {
          data.success ? alert("Product Added") : alert("Failed to add product")
        })
      } else {
        console.error('Error in response data:', responseData);
      }
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  return (
      
      <div className='add-product'>
        <div className="heading">
          JOIN AS SERVICE PROVIDER
        </div>
        <div className="addproduct-itemfield">
          <p>Name</p>
          <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Name" className="addproduct-input" />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder='Enter Price' className="addproduct-input" />
          </div>
        </div>
        <div className="addproduct-itemfield">
          <p>Profession</p>
          <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
            <option value="plumber">Plumber</option>
            <option value="electrician">Electrician</option>
            <option value="painter">Painter</option>
            <option value="barber">Barber</option>
            <option value="milk vendor">Milk Vendor</option>
            <option value="mechanic">Mechanic</option>
            <option value="RMP">RMP</option>
            <option value="tailor">Tailor</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <p>Address</p>
          <input value={productDetails.address} onChange={changeHandler} type="text" name="address" placeholder="Address" className="addproduct-input" />
        </div>
        <div className="addproduct-itemfield">
          <p>Description</p>
          <textarea value={productDetails.description} onChange={changeHandler} name="description" placeholder="Description" className="addproduct-input" />
        </div>
        <div className="addproduct-itemfield">
          <p>Phone</p>
          <input value={productDetails.phone} onChange={changeHandler} type="text" name="phone" placeholder="Phone" className="addproduct-input" />
        </div>
        <div className="addproduct-itemfield">
          <p>Upload Image</p>
          <label htmlFor="file-input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              className='addproduct-thumnail-img'
              alt="Upload Thumbnail"
            />
          </label>
          <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
        </div>
        <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
      </div>
    
  );
};

export default Addproduct;
