import React from 'react';
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/home">Home</a>
                <a href="/About">About Us</a>
                <a href="/Menu">Menu</a>
                <a href="/Schefs">Our Schefs</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;