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
              <h2>Hola</h2>
              
            </div>
        </div>
    </m.div>
    </>
  )
}
