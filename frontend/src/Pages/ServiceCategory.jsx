import React, { useContext } from 'react';
import './ServiceCategory.css';
import { ServiceContext } from '../Context/ServiceContext';
import Item from '../Components/Item/Item';

const ServiceCategory = (props) => {
    const { all_services } = useContext(ServiceContext);

    if (!all_services) {
        return <div>Loading...</div>; // Add a fallback UI if context is null
    }

    return (
        <div className='service-category'>

            <h2>{props.category}</h2>
            <div className="shopcategory-indexsort">
                <p>
                    <span>
                        Service Providers
                    </span>
                </p>
                <div className="shopcategory-sort">
                    
                </div>
                <div className="shopcategory-product">
                    {all_services.map((item, i) => {
                        if (props.category === item.category) {
                            return (
                                <Item 
                                    key={item.id} 
                                    id={item.id} 
                                    name={item.name} 
                                    image={item.image} 
                                    address={item.address} 
                                />
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default ServiceCategory;
