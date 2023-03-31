import React from 'react'
import { Link } from 'react-router-dom'
import logoFooter from '../assets/logo-footer.png'
import facebookIcon from '../assets/images/iconos/facebook.svg'
import instagramIcon from '../assets/images/iconos/instagram.svg'
import twitterIcon from '../assets/images/iconos/twitter.svg'

export const Footer = () => {
  return (
    <>
    <footer>
      <div className="centered">
        <div className="footer__container flex">
          <div className="footer__logo">
            <div>
              <img src={logoFooter} alt="Joy center KIDS Logo Footer" />
            </div>
          </div>
          <div className="footer__nav">
            <div>
              <h5>Menú</h5>
              <Link to="/">Inicio</Link>
              <Link to="/themes">Temas</Link>
              <Link to="/programs">Programas</Link>
              <Link to="/contact">Contacto</Link>
            </div>
          </div>
          <div className="footer__location">
            <div>
              <h5>Dirección</h5>
              <p>B. Amsterdam B3 Johan Huizingalaan 400 1066 JS Amsterdam The Netherlands Kvk: 69305315</p>
            </div>
            <div className="footer__social flex">
              <a href="http://"><img src={facebookIcon} alt="Facebook Icon" /></a>
              <a href="http://"><img src={instagramIcon} alt="Instagram Icon" /></a>
              <a href="http://"><img src={twitterIcon} alt="Twitter Icon" /></a>
            </div>
          </div>
        </div>
        <div className="footer__brand flex">
          <div>
            <a href="http://">© 2023 JOY center KIDS</a>
          </div>
          <div>
            <a href="http://">Built with love by Ingetrol Marketing</a>
          </div>
          <div className='flex'>
            <a href="http://">Term of use</a>
            <a href="http://">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
