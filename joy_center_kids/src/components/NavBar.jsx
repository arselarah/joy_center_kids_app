import React from 'react'
import logo from '../assets/logo.png'

export const NavBar = () => {
  return (
    <>
        <header className='header'>
            <div className='centered'> 
                    <nav className='desktop-main-nav'>
                        <div className='logo-container'>
                            <a href="" className="logo-link"><img src={logo} /></a>
                        </div>
                        <div className='nav-container'>
                            <ul>
                                <li><a href="http://">Joy center Kids</a></li>
                                <li><a href="http://">Temas</a></li>
                                <li><a href="http://">Programas</a></li>
                            </ul>
                        </div>
                        <div className="button-container top">
                            <button className="contact call-to-action ghost blue">Contacto</button>
                        </div>
                        <div className="mobile-button-container">
                            <button className='button-mobile-toggle' aria-controls='mobile-menu' aria-expanded="false">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </nav>
            </div>
        </header>
    </>
  )
}

