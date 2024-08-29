import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <div className='item' key={props.id}>
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <p>{props.category}</p>
            <div className="address">
                {props.address}
            </div>
        </div>
    );
}

export default Item;
