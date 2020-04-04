
import React from 'react';
import "../styles/Header.css"

const Header = () =>(
        <div className="navbar">
                <img  className="logo" src="/icon.png" alt=""></img>
            <div className="navbar-left">
                <a className="nav-link">Home</a> 
                <a className="nav-link">Useful Links</a> 
            </div>
        </div>
    )



export default Header;