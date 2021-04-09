import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { CartContext } from '../Product/Product';
import './Products.css';

const Products = (props) => {
    const history = useHistory();
    const products = props.products;
    const [productId, setProductId] = useState();


    const handleProductView = (id) => {
        history.push(`/dish/${ (id).split('"')[1] }`);
    }


    return (
        <div className="d-flex flex-wrap justify-content-evenly mt-4">
            {products.map(product =>
                <div className="card productCard" onClick={() => handleProductView(`"${ product._id }"`)}>
                    <img src={product.imgURL} alt={product.Name} />
                    <h3 className="mt-2 mb-2">{product.Name}</h3>
                    <h2>${product.price}</h2>
                </div>
            )}
        </div>
    );
};

export default Products;