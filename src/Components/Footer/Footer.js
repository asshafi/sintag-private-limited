import React from 'react';
import {  NavLink } from 'react-router-dom';

const Footer = () => {
    let inActiveClass = "nav-link px-2 text-white";
    return (
        <footer className="container-fluid mt-5 shadow bg-dark text-white">
            
             <footer className="py-3">
             <h3 class="h2 text-center text-white fw-bold fs-2">SINTAG PRIVATE LIMITED</h3>
            <p class="text-center  mb-0">NARULI UTTAR PARA,BOGURA SADAR <br/> BOGURA-5800</p>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><NavLink to="/" className={inActiveClass}>Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/products" className={inActiveClass}>Products</NavLink></li>
                    <li className="nav-item"><NavLink to="/news" className={inActiveClass}>News</NavLink></li>
                    <li className="nav-item"><NavLink to="/about" className={inActiveClass}>About Us</NavLink></li>
                    <li className="nav-item"><NavLink to="/faq" className={inActiveClass}>FAQ</NavLink></li>
                    <li className="nav-item"><NavLink to="/blog" className={inActiveClass}>Blog</NavLink></li>
                </ul>

                <p className="text-center">© All Right Reserved SINTAG PRIVATE LTD-2022</p>
            </footer>

        </footer>
    );
};

export default Footer;