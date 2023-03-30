import React from 'react'
import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export const NavBar = () => {
    const navRef = useRef();
    // const filterRef = useRef();
    // const buttonColorRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("display-menu-mobile");
        // filterRef.current.classList.toggle("white-filter");
        // buttonColorRef.current.classList.toggle("change-color");
    }
  return (
    <>
        <header className='header'>
            <div className='centered'> 
                    <nav className='desktop-main-nav'>
                        <div className='logo-container'>
                            <a href="/" className="logo-link"><img src={logo} alt="JOY center KIDS Logo"/></a>
                        </div>
                        <div className='nav-container'>
                            <ul>
                                <li><NavLink to="/">JOY center KIDS</NavLink></li>
                                <li><NavLink to="/themes">Temas</NavLink></li>
                                <li><NavLink to="/programs">Programas</NavLink></li>
                            </ul>
                        </div>
                        <div className="button-container top">
                             <NavLink className="contact call-to-action ghost blue" to="/contact">Contacto</NavLink>
                        </div>
                        <div className="mobile-button-container">
                            <button className='button-mobile-toggle' aria-controls='mobile-menu' aria-expanded="false" onClick={showNavBar}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </nav>
            </div>
        </header>
        <div ref={navRef} className="mobile-menu">
            
        </div>
    </>
  )
}

