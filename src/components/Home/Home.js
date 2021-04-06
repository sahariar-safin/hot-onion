import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <form className="col-md-6 m-auto py-5">
                <div className="input-group mb-3">
                    <input type="text" className="form-control search" placeholder="Search products ..."></input>
                    <div className="search input-group-append">
                        <button type="button" className="btn btn-success">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Home;