import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useReducedMotion } from 'framer-motion'





export const NavBar = () => {
    const navRef = useRef();
    const iconRef = useRef();
    
    const hideNavBar = () => {
        navRef.current.classList.remove("display-menu-mobile");
        iconRef.current.classList.remove("close");
        
    }

    const [navHide, setNavHide] = useState();

    const hideNav = () => {
        setNavHide(prevValue  => !prevValue);
        iconRef.current.classList.toggle("close");
            //console.log('Hola')
    };



    // const navLinkEls = document.querySelectorAll('.nav__link');

    // navLinkEls.forEach(navLinkEl => {
    //     navLinkEl.addEventListener('click', () => {
    //         document.querySelector('.display-menu-mobile').classList.remove('display-menu-mobile');
    //         console.log('Hola')
    //     });
    // });
    
    // const [header, setNavBar] = useState(false);

    // const changeBg = () => {
    //     if(window.scrollY >= 120) {
    //         setNavBar(true);
    //     } else {
    //         setNavBar(false);
    //     }
    // }

    // window.addEventListener('scroll', changeBg);

    
  return (
    <>
        <header className="header">
            <div className='centered side-padding'> 
                    <nav className='desktop-main-nav'>
                        <div className='logo-container'>
                            <Link to="/" className="logo-link"><img src={logo} alt="JOY center KIDS Logo"/>center KIDS</Link>
                        </div>
                        <div className='nav-container'>
                            <ul>
                                <li><NavLink to="/">Inicio</NavLink></li>
                                <li><NavLink to="/themes">Temas</NavLink></li>
                                <li><NavLink to="/programs">Programas</NavLink></li>
                                <li><NavLink to="/news">News</NavLink></li>
                            </ul>
                        </div>
                        <div className="button-container top xm:hidden md:block">
                             <NavLink onClick={hideNavBar} className="contact call-to-action ghost blue" to="/contact">Contacto</NavLink>
                        </div>
                        <div className="mobile-button-container">
                            <button className='button-mobile-toggle' aria-controls='mobile-menu' aria-expanded="false" onClick={hideNav} ref={iconRef}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </nav>
            </div>
        </header>
        {/* <div ref={navRef} className={navHide ? "mobile-menu " : "mobile-menu display-menu-mobile"}> */}
        <div ref={navRef} className={navHide ? "mobile-menu display-menu-mobile" : "mobile-menu "}>
            <div className='nav-container flex justify-center content-center relative h-[100%] pt-[10rem]'>
               <ul className='w-[100%] flex flex-col'>
                    <li className='px-[2rem] py-[1rem]'><Link onClick={hideNav} className="nav__link block text-3xl font-semibold text-[#ffffff] tracking-[var(--ls-heading)]" to="/">Inicio</Link></li>
                    <li className='px-[2rem] py-[1rem]'><Link onClick={hideNav} className="nav__link block text-3xl font-semibold text-[#ffffff] tracking-[var(--ls-heading)]" to="/themes">Temas</Link ></li>
                    <li className='px-[2rem] py-[1rem]'><Link onClick={hideNav} className="nav__link block text-3xl font-semibold text-[#ffffff] tracking-[var(--ls-heading)]" to="/programs">Programas</Link></li>
                    <li className='px-[2rem] py-[1rem]'><Link onClick={hideNav} className="nav__link block text-3xl font-semibold text-[#ffffff] tracking-[var(--ls-heading)]" to="/news">News</Link></li>
                    <li className='px-[2rem] py-[1rem]'><Link onClick={hideNav} className="nav__link block text-3xl font-semibold text-[#ffffff] tracking-[var(--ls-heading)]" to="/contact">Contacto</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}

