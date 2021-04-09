import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './Product.css';


const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState({
        quantity: 1
    });



    useEffect(() => {
        axios.get(`http://localhost:5000/product?id=${ id }`)
            .then(function (response) {
                const data = response.data[0];
                console.log(data);
                setProduct(data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    const [cart, setCart] = useState([]);
    const handleCart = (id) => {
        const newCart = [...cart, id];
        setCart(newCart);
        sessionStorage.setItem("id", JSON.stringify(newCart))
    }


    return (
        <div className="row m-5">
            <div className="col-md-6 col-sm-12 col-xs-12">
                <h1>{product.Name}</h1>
                <p>{product.description}</p>
                <div className="d-flex flex-wrap">
                    <h1>${product.price}</h1>
                    <div className="quantity d-flex flex-inline align-item-center ">
                        <button onClick={() => {
                            {
                                quantity.quantity > 1 &&
                                    setQuantity({
                                        quantity: quantity.quantity - 1
                                    });
                            }
                        }} className="btn btn-light">-</button>
                        <input id='counter' value={quantity.quantity} type="number" name="quantity" className="w-25 text-center form-control" id="" />
                        <button onClick={() => {
                            setQuantity({
                                quantity: quantity.quantity + 1
                            });
                        }} className="btn btn-light from-append">+</button>
                    </div>
                </div>
                <button onClick={() => handleCart(`${ product._id }`)} className="btn btn-danger addCraft">Add</button>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
                <img src={product.imgURL} alt="" />
            </div>
        </div>
    );
};

export default Product;