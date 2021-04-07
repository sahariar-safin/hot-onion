import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

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

    return (
        <div className="row">

        </div>
    );
};

export default Product;