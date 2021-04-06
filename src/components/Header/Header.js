import React from 'react';
import { Link, Router } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg justify-content-between navbar-dark bg-transparent">
            <div class="container-fluid justify-content-between">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link className="nav-link" to="/signup">Sign UP</Link>
                        <Link className="btn btn-primary" to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;