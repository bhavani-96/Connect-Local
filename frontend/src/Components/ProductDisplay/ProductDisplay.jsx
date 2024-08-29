import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import phone_icon from '../Assets/phone_icon.png';
import chat_icon from '../Assets/chat_icon.png';  // Import chat icon
import profileImage from '../Assets/profileImage.png';  // Import profile image
import { ServiceContext } from '../../Context/ServiceContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { addToCart } = useContext(ServiceContext);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = {
            name,
            date,
            address,
            phoneNumber,
            productId: product.id
        };
    
        try {
            const response = await fetch('http://localhost:4000/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });
    
            const result = await response.json();
    
            if (result.success) {
                console.log("Form submitted with data:", bookingData);
                alert("Successfully booked");
            } else {
                alert("Failed to book");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("Server error while submitting the form");
        }
    };
    

    if (!product) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt={product.name} />
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    {/* Insert star rating logic or images here */}
                </div>
                <div className="productdisplay-right-prices">
                    {product.price}
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <div className="form-container">
                    <div className="header">
                        <img src={profileImage} alt="Profile" className="profile-image" />
                        <div className="header-info">
                            <h2>{props.userName || 'User Name'}</h2>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                        required />
                        <label htmlFor="date">SELECT DATE AND TIME</label>
                        <input
                            type="datetime-local"
                            id="date"
                            value={date}
                            onChange={handleDateChange}
                        required/>
                        <label htmlFor="address">Your address</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={handleAddressChange}
                        required/>
                        <label htmlFor="phone" >Your phone number</label>
                        <input
                            className='phone'
                            type="tel"
                            id="phone"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        required/>
                        <div className="contact-icons">
                            <img src={phone_icon} alt="Phone" className="phone-icon" />
                            <img src={chat_icon} alt="Chat" className="chat-icon" />
                        </div>
                        <button className="submit-button" type="submit" onClick={() => { addToCart(product.id) }}>BOOK NOW</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
