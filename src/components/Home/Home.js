import React from 'react';
import DishCatagory from '../DishCatagory/DishCatagory';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="search-section align-item-center">
                <form className="col-md-6 m-auto py-5">
                    <h1 className="text-dark">Best food waiting for your belly!</h1>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control search" placeholder="Search products ..."></input>
                        <div className="search input-group-append">
                            <button type="button" className="btn btn-success">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            <DishCatagory></DishCatagory>
        </div>
    );
};

export default Home;