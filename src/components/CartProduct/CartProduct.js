import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CartProduct.css';

const CartProduct = (props) => {
    const { id, quantity } = props.cart;
    const [product, setProduct] = useState([]);
    const [cartQuantity, setCartQuantity] = useState({
        quantity: quantity
    });
    useEffect(() => {
        axios.get(`http://localhost:5000/product?id=${ id }`)
            .then(function (response) {
                const data = response.data[0];
                setProduct(data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])


    return (
        <>
            <div className="card cartProduct d-flex">
                <img src={product.imgURL} alt="" />
                <div className="productDetails">
                    <h5>{product.Name}</h5>
                    <h1 className="text-danger">${product.price * cartQuantity.quantity}</h1>
                    <div className="quantity d-flex flex-inline align-item-center ">
                        <button onClick={() => {
                            {
                                cartQuantity.quantity > 1 &&
                                    setCartQuantity({
                                        quantity: cartQuantity.quantity - 1
                                    });
                            }
                        }} className="btn btn-light">-</button>
                        <input id='counter' value={cartQuantity.quantity} type="text" name="quantity" className="w-25 text-center form-control" id="" />
                        <button onClick={() => {
                            setCartQuantity({
                                quantity: cartQuantity.quantity + 1
                            });
                        }} className="btn btn-light from-append">+</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProduct;