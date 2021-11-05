import { useState } from "react";
import React from 'react';
import NavBar from "../components/navbar";
import logo from '../assets/images/logo.png'



const Header = () => {
    const [currentPage, handlePageChange] = useState("about");

    return (
        <>
<header>
<nav className="navbar navbar-expand-lg navbar-light m-4 p-3">
    <div className="container-fluid ">
    <img src={logo} alt="" width="200" height="100" className="d-inline-block align-text-top"/>
    <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
        <NavBar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            />
    </div>
    </div>
 </nav>
</header>
</>
    )
}

export default Header;