import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link, Router } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const cart = JSON.parse(sessionStorage.getItem('cart'));

    return (
        <nav className="navbar navbar-expand-lg justify-content-between navbar-light bg-transparent">
            <div className="container-fluid justify-content-between">
                <Link className="navbar-brand" to="/">Hot Onion</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav align-items-center">
                        <Link><FontAwesomeIcon className="cart" icon={faShoppingCart}></FontAwesomeIcon></Link>
                        <h6 className="text-danger">{cart.length}</h6>
                        <Link className="nav-link" to="/signup">Sign UP</Link>
                        <Link className="btn btn-primary" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;