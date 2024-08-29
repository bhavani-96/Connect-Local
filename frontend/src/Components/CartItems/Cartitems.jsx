import React from 'react'
import './Cartitems.css';
import { useContext } from 'react';
import { ServiceContext } from '../../Context/ServiceContext';
const Cartitems = () => {
    const {getTotalcartAmount,all_services,cartItems,removeFromCart} = useContext(ServiceContext);
  return (
    <div calssname='cartitems'>
        <div className="cartitems-format-main">
            <p>ServiceProvider</p>
            <p>Title</p>
            <p>Price</p>
            <p>No of times booked</p>
            <p>Total</p>
            <p>Cancel</p>
        </div>
        <hr/>
        {all_services.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                    <div className="cartitems-format cartitems-format-main">
                    <img src={e.image}alt='' className='carticon-product-icon'/>
                    <p>{e.name}</p>
                    <p>{e.price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>{e.price}</p>
                    <p className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}}>❌</p>
                    </div>
                    <hr/>
                 </div>
            }
            return null;
        })}
        {/* <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Total</h1>
                <div>
                    <div className="div cartitem-total-item">
                        <p>SubTotal</p>
                        <p>${getTotalcartAmount}</p>
                    </div>
                    <hr/>
                    
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>total</h3>
                        <h3>${getTotalcartAmount}</h3>
                    </div>
                </div>
                
            </div> */}
            
        {/* </div> */}
      
    </div>
  )
}

export default Cartitems
