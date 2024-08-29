import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceContext } from '../Context/ServiceContext';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
    const { all_services } = useContext(ServiceContext);
    const { productId } = useParams();
    const product = all_services.find((e) => e.id === Number(productId));

    return (
        <div>
            {product ? <Breadcrums product={product} /> : <p>Product not found</p>}
            <ProductDisplay product={product}/>
        </div>
    );
}

export default Product;
