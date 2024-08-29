import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'
const Popular = () => {
const [popularProducts,setPopularProducts] = useState([]);
useEffect(()=>{
  fetch('http://localhost:4000/popularplumber')
  .then((response)=>response.json())
  .then((data)=>setPopularProducts(data));
},[])



  return (
    <div className='popular'>
        <h1>POPULAR SERVICE PROVIDERS</h1>
        <hr/>
        <div className="popular-item">
          {popularProducts.map((product)=>{
            return <Item key={product.id} id={product.id} name={product.name} image={product.image} address={product.address}/>
          })}
        </div>
      
    </div>
  )
}

export default Popular
