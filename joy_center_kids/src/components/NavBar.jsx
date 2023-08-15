import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'





export const NavBar = () => {
    const navRef = useRef();
    const iconRef = useRef();
    const logoFilter = useRef();
    
    // const hideNavBar = () => {
    //     navRef.current.classList.remove("display-menu-mobile");
    //     iconRef.current.classList.remove("close");
        
    // }

    const [navHide, setNavHide] = useState();

    const hideNav = () => {
        setNavHide(prevValue  => !prevValue);
        iconRef.current.classList.toggle("close");
        logoFilter.current.classList.toggle("filter");
            //console.log('Hola')
    };

    


    // const navLinkEls = document.querySelectorAll('.nav__link');

    // navLinkEls.forEach(navLinkEl => {
    //     navLinkEl.addEventListener('click', () => {
    //         document.querySelector('.display-menu-mobile').classList.remove('display-menu-mobile');
    //         console.log('Hola')
    //     });
    // });
    
    const [header, setNavBar] = useState(false);

    const changeBg = () => {
        if(window.scrollY >= 120) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }

    window.addEventListener('scroll', changeBg);

    
  return (
    <>
        {/* <header className="header"> */}
        {/* <header className={header ? 'header scrolled' : 'header'}> */}
        <div className={header ? 'base-header scrolled' : 'base-header'}></div>
        <header className="header">
            <div className='centered side-padding'> 
                    <nav className='desktop-main-nav'>
                        <div className='logo-container'>
                            <a ref={logoFilter} href="/" className="logo-link"><img src={logo} alt="JOY center KIDS Logo"/>center KIDS</a>
                        </div>
                        <div className='nav-container'>
                            <ul>
                                <li><NavLink to="/">Inicio</NavLink></li>
                                <li><NavLink to="/themes">Temas</NavLink></li>
                                <li><NavLink to="/programs">Talleres</NavLink></li>
                                <li><NavLink to="/news">News</NavLink></li>
                            </ul>
                        </div>
                        <div className="button-container top xm:hidden md:block">
                             <NavLink className="contact call-to-action ghost blue" to="/contact">Contacto</NavLink>
                        </div>
                        <div className="mobile-button-container select-none">
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
        <div className={navHide ? "mobile-menu display-menu-mobile" : "mobile-menu "}>
            <div className='nav-container flex flex-col gap-[2rem] justify-between content-center relative h-[100%] pt-[8rem] overflow-hidden'>
               <ul className='relative w-[100%] flex flex-col menu-objects'>
                    <li className='px-[2rem] pt-[1rem]'><NavLink onClick={hideNav} className="nav__link block text-3xl font-bold text-[#ffffff] tracking-[var(--ls-heading)]" to="/">Inicio</NavLink></li>
                    <li className='px-[2rem] pt-[1rem]'><NavLink onClick={hideNav} className="nav__link block text-3xl font-bold text-[#ffffff] tracking-[var(--ls-heading)]" to="/themes">Temas</NavLink ></li>
                    <li className='px-[2rem] pt-[1rem]'><NavLink onClick={hideNav} className="nav__link block text-3xl font-bold text-[#ffffff] tracking-[var(--ls-heading)]" to="/programs">Programas</NavLink></li>
                    <li className='px-[2rem] pt-[1rem]'><NavLink onClick={hideNav} className="nav__link block text-3xl font-bold text-[#ffffff] tracking-[var(--ls-heading)]" to="/news">News</NavLink></li>
                    <li className='px-[2rem] pt-[1rem]'><NavLink onClick={hideNav} className="nav__link block text-3xl font-bold text-[#ffffff] tracking-[var(--ls-heading)]" to="/contact">Contacto</NavLink></li>
                </ul>
                <div className='social-networks relative px-[2rem] pt-[2rem]'>
                <a className='facebook mr-[2rem]' target='_blank' href="https://www.facebook.com/JOYcenterKids/"></a>
                <a className='instagram ' target='_blank' href="https://www.instagram.com/joycenterkids/"></a>
                </div>
            </div>
        </div>
    </>
  )
}

