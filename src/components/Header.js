
import React from 'react';
import "../styles/Header.css"

const Header = () =>(
        <div className="navbar">
                <img  className="logo" src="/icon.png" alt=""></img>
            <div className="navbar-left">
                <a className="nav-link focused">Home</a> 
                <a className="nav-link">Demographics</a> 
                <a className="nav-link">Deep Dive</a> 
                <a className="nav-link">Helpful Links</a> 
                <a className="nav-link">About</a> 
                <a className="nav-link">Essentials</a> 
            </div>
        </div>
    )



export default Header;