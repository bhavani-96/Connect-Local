import React, { createContext, useEffect, useState } from 'react';

export const ServiceContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ServiceContextProvider = ({ children }) => {
    const [all_services,setAll_product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',

                },
                body:"",

            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
    },[])
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId}),

            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }

    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/decrementcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId}),

            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));

        }

    }
    const getTotalCartAmount = () =>{
        let totalAmount =0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_services.find((product)=>product.id===Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
            return totalAmount;
        }
    }
    const contextValue = { getTotalCartAmount,all_services, cartItems ,addToCart,removeFromCart};
    return (
        <ServiceContext.Provider value={contextValue}>
            {children}
        </ServiceContext.Provider>
    );
}

export default ServiceContextProvider;
