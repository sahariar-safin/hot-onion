import React, { createContext, useState } from 'react';
import './Products.css';

const Products = (props) => {
    const products = props.products;
    const [productId, setProductId] = useState();

    const handleProductView = (id) => {
        console.log(id);
        
    }

    return (
        <div className="d-flex flex-wrap justify-content-evenly mt-4">
            {products.map(product =>
                <div className="card" onClick={() => handleProductView(`'${ product._id }'`)}>
                    <img src={product.imgURL} alt={product.Name} />
                    <h3 className="mt-2 mb-2">{product.Name}</h3>
                    <h2>${product.price}</h2>
                </div>
            )}
        </div>
    );
};

export default Products;