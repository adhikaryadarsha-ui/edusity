import React from 'react'
import './Navbar.css';
import Logo from '../../assets/logo.png';
import { useState, useEffect } from "react";
import {Link} from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
   const [sticky, setSticky] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);


  

const [mobileMenu, setMobileMenu]=useState(false);

const toggleMenu =()=>{
if(mobileMenu == true){
  setMobileMenu(false)
}else if (mobileMenu == false) {
  setMobileMenu(true);
}

// mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
}
  return (
    <div>
      <nav className={`${sticky ? "dark-nav" : "navbar"}`}>
        <div className="container">
          <div className="nav-content">
            <img src={Logo} alt="Logo" className="logo" />
            <ul className={mobileMenu ? "hide-mobile-menu" : "nav-links"}>
              <li>
                <Link to="hero" smooth={true} offset={0} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="program" smooth={true} offset={-260} duration={500}>
                  Program
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={-150} duration={500}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="campous" smooth={true} offset={-260} duration={500}>
                  Campus
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  offset={-260}
                  duration={500}
                  className="btn"
                >
                  {" "}
                  Contact Us
                </Link>
              </li>
            </ul>
            <img
              src={menu_icon}
              alt="menu icon"
              className="mobile-icon"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
