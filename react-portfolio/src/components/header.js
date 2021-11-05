
import React from 'react';
import logo from '../assets/images/logo.png'


function Header({ currentPage, handlePageChange })  {

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
    <nav> 
            <ul className="nav nav-tabs border-0">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link text-primary navActive' : 'nav-link text-primary'} >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
        
          className={currentPage === 'Portfolio' ? 'nav-link text-primary navActive' : 'nav-link text-primary'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
        
          className={currentPage === 'Resume' ? 'nav-link text-primary navActive' : 'nav-link text-primary'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link text-primary navActive' : 'nav-link text-primary'}
        >
          Contact
        </a>
      </li>
    </ul>
        </nav>



    </div>
    </div>
 </nav>
</header>
</>
    )
}

export default Header;