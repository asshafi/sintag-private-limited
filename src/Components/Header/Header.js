import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../../Contexts/UserContext';
import LocalStore from '../../Storage';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
   //Checking screen size 
   const handleResize = () => {
    if (window.innerWidth < 768) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
}

// create an event listener
 useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    let dark = LocalStore('darkmode')===true;
    if(dark){
        document.querySelector("body").classList.add('dark');
    }else{
        document.querySelector("body").classList.remove('dark');
    }
})
   
    const { user } = useContext(AuthContext);
    const location = useLocation();
    let activeClassName = "nav-link px-2 link-dark active-link nav-item fw-bold";
    let inActiveClass = "nav-link px-2 link-dark nav-item text-white fw-bold";
    let homeClass = "py-3 border-bottom active top-0 start-0";
    let otherClass = "py-3 border-bottom";

    return (
        
    <header className={location.pathname !== '/' ? otherClass : (isMobile ? otherClass : homeClass)}>
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
                    {ToggleDarkMode()}

                    {user ? <div className="text-end d-flex mt-2 align-items-center justify-content-center">
                        <Link to="#" className="d-block link-dark text-decoration-none"><img src={user.photoURL} alt={user.displayName} title={user.displayName} width="32" height="32" className="rounded-circle" /></Link>
                        <Link to="/logout" className="btn btn-outline-danger ms-3">Logout</Link>
                    </div> :
                        <div className="text-end mt-2">
                            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
                            <Link to="/signup" className="btn btn-primary">Sign-up</Link>
                        </div>}
                </div>
            </div>
        </nav>
        <picture><img className='w-100  mt-5' src="images/BANNER1.jpg" alt="" /></picture>
    </header>
        
    );
};
const ToggleDarkMode = () => {

    const [darkmode, setDarkmode] = useState(LocalStore('darkmode'));
    const handleDarkmode = (e) => {
        setDarkmode(e.target.checked);
        LocalStore('darkmode', e.target.checked);
    }

    return (
        <div className='text-center col-12 col-md-auto mb-2 justify-content-center mb-md-0 mt-2'>
            <div className="form-check form-switch mx-auto d-inline-block">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={darkmode} onChange={handleDarkmode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
            </div>
        </div>
    );
}

export default Header;