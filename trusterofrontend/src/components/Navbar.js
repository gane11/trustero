import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'
import './Navbar.css'


const Navbar = () => {

        return (
            <div className="navbar__container">
                <Link to="/">
                    <img 
                        className="navbar-icon"
                        src={logo}
                        alt=""
                    />
                </Link>
                <div className="navbar-middle">

                </div>
                <div className="navbar-right">
                    <h1>Todos List</h1>
                </div>
            </div>
        )
    
};


export default Navbar