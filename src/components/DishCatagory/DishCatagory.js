import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './DishCatagory.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Products from '../Products/Products';

const DishCategory = () => {

    const [value, setValue] = useState(1);
    const [label, setLabel] = useState("Lunch");
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    console.log(label);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setLabel(event.target.innerHTML)
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/products?category=${ label }`)
            .then(function (response) {
                const data = response.data;
                setProducts(data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [label])


    return (
        <div className="text-center">
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Breakfast"></Tab>
                    <Tab label="Lunch"></Tab>
                    <Tab label="Dinner"></Tab>
                </Tabs>
            </Paper>
            <Products products={products}></Products>
        </div>
    );
};

export default DishCategory;