import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
   
   

    let activeClassName = "nav-link px-2 link-dark active-link nav-item fw-bold";
    let inActiveClass = "nav-link px-2 link-dark nav-item text-white fw-bold";
  
    return (
        
    <header>
        <nav id="nav" class="navbar navbar-expand-md fixed-top ">
            <div class="container-fluid d-flex justify-content-between">
                <div class="d-flex align-items-center mb-md-0 me-md-auto">
                    <Link to="/" className="navbar-brand  text-dark text-decoration-none d-flex align-items-center col-md-auto  mb-md-0 text-dark text-decoration-none">
                      <img className='img-fluid w-50' src="images/logo/SWS (1).png" alt="" />
                    </Link>
                    
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse px-2 " id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-md-0 ">
                    <li><NavLink to="/" className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>Home</NavLink></li>
                        <li><NavLink to="/products" className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>Products</NavLink></li>
                        <li><NavLink to="/news" className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>News</NavLink></li>
                        <li><NavLink to="/about" className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>About Us</NavLink></li>
                        <li><NavLink to="/faq" className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>FAQ</NavLink></li>
                        <li><NavLink to="/blog" className={(({ isActive }) => isActive ? activeClassName : inActiveClass)} end>Blog</NavLink></li>
                
                    </ul>
                </div>
            </div>
        </nav>
        <picture><img className='w-100  mt-5' src="images/BANNER1.jpg" alt="" /></picture>
    </header>
        
    );
};

export default Header;