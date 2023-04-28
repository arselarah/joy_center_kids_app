import React from 'react'
import { Link } from 'react-router-dom'
import logoFooter from '../assets/logo-footer.png'
import facebookIcon from '../assets/images/iconos/facebook.svg'
import instagramIcon from '../assets/images/iconos/instagram.svg'
import { Newsletter } from './Newsletter/Newsletter'

export const Footer = () => {
  return (
    <>
    <footer>
      <div className="centered side-padding">
        <div className="footer__container flex flex-columns-rows gap-4">
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
              <Link to="/news">News</Link>
              <Link to="/contact">Contacto</Link>
            </div>
          </div>
          <div className="footer__location">
            <div>
              <h5>Dirección</h5>
              <p className='text-[var(--color-regular)]'>Distrito Viñedos. Torreón, Coahuila. México</p>
              <p className='text-[var(--color-regular)]'>Teléfono: 871 234 8792</p>
            </div>
            <div className="footer__social flex gap-2">
              <a target='_blank' href="https://www.facebook.com/JOYcenterKids/"><img src={facebookIcon} alt="Facebook Icon" /></a>
              <a target='_blank' href="https://www.instagram.com/joycenterkids/"><img src={instagramIcon} alt="Instagram Icon" /></a>
              {/* <a href="http://"><img src={twitterIcon} alt="Twitter Icon" /></a> */}
            </div>
          </div>
        </div>
        <div className="newsletter">
          <Newsletter />
        </div>
        <div className="footer__brand flex">
          <div>
            <a href="http://">© 2023 JOY center KIDS</a>
          </div>
          <div>
            <a href="http://">Built with love by Echoes Marketing</a>
          </div>
          <div className='flex gap-2'>
            <a href="http://">Term of use</a>
            <a href="http://">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
