import React from 'react'
import { motion as m } from 'framer-motion'

export const Contact = () => {
  return (
    <>
    <m.div className="hero inner-page"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <div className="centered">
            <div className="hero__text-container">
              <h1>Contacto</h1>
              <h2>Hola ¿Quiseres conocer más de JOY center KIDS?</h2>
              
            </div>
        </div>
    </m.div>

    <section className="section-page form xl-vertical-padding">
      <div className="centered side-padding">
        <div className="section-box flex colored-cage orange-bg no-padding no-gap">
          <div className="form__content image-bg flex flex-columns space-between">
            <div>
             <span>Email</span>
             <a>hola@joycenterkids.com</a>
             <span>Teléfono</span>
             <a>871 256 8923</a>
            </div>
            <div>
              <p className='xs-text'>By submitting this form, I acknowledge receipt of the Privacy Policy.</p>
              <p className='xs-text'>The controller of your personal data is Wennect OÜ, a company established under the laws of Estonia. Your personal data provided by you in the registration form above will be used for the purpose of sending you an email with instructions on how to set up your account on the Wennect Platform. The legal basis of processing your personal data is the fulfilment of contract with the controller. For more information about the processing of your personal data, including your rights, please refer to the Privacy Policy.</p>
            </div>
          </div>
          <div className="form__content">
            <form>
              <div className='form__content flex flex-columns'>
                <h3>Envíanos un mensaje</h3>
                  <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" placeholder='Tu nombre' />
                  </div>
                  <div>
                    <label htmlFor="phone">Teléfono</label>
                    <input type="tel" name="phone" placeholder='Tu número de teléfono' />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Tu email' />
                  </div>
                  <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message"></textarea>
                  </div>
                  <div>
                    <label htmlFor="terms">Acepta los términos</label>
                    <div className='flex flex-rows'>
                      <input type="checkbox" name="terms" value="checked" />
                      <p className='xs-text'>Acepto los términos y condiciones descritos en las políticas de privacidad</p>
                    </div>
                  </div>
                  <button className='call-to-action solid blue' type='submit'>Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
