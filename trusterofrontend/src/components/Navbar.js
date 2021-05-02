import React from 'react';
import logo from './images/logo.png'
import './Navbar.css'


const Navbar = () => {

        return (
          <div className="navbar__container">
            <a href="https://github.com/gane11/trustero">
              <img className="navbar-icon" src={logo} alt="" />
            </a>
            <div className="navbar-middle"></div>
            <div className="navbar-right">
              <h1>Todos Lists</h1>
            </div>
          </div>
        );
    
};


export default Navbar

//date