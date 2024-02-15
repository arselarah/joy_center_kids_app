import React from 'react'
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import image_1 from '../assets/images/aprendizaje.jpeg'
import image_2 from '../assets/images/lenguaje.jpeg'
import image_3 from '../assets/images/infantil.jpeg'
import image_4 from '../assets/images/regularizacion.jpeg'

export const Desarrollo = () => {
  return (
    <>
    <m.div className="hero inner-page"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <div className="centered side-padding">
            <div className="hero__text-container">
              <h1 className='text-[var(--color-orange)]'>Desarrollo</h1>
              <h2>Herramientas para el desarrollo integral de tus peques</h2>
              
            </div>
        </div>
    </m.div>
    <m.section className="section-page themes xl-vertical-padding"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
      <div className="centered side-padding">
        <div className="coverpage__text-container center-text large xl-vertical-padding">
          {/* <h3>¿Cómo formar niños competentes a través de la gamificación?</h3> */}
          <p>En JOY Center Kids, nos apasiona impulsar el crecimiento integral de cada niño. Nuestro conjunto de servicios y terapias educativas están diseñados para cultivar habilidades fundamentales y fomentar el desarrollo en áreas clave. Trabajamos mano a mano con padres, cuidadores y educadores para ofrecer un enfoque personalizado que se adapte a las necesidades únicas de cada pequeño.</p>
        </div>
        
      </div>
    </m.section>
    <section className="section-page themes xl-vertical-padding">
      <div className="centered side-padding">
      <div className=" section-box flex colored-cage yellow-bg side-padding vertical-padding overflow-hide position-rel">
      <div className="pattern bluish"></div>
          <div className='flex align-items flex-columns-rows even-flex gap-4 position-rel zindex-1'>
          <div className="coverpage__text-container">
             <h3>Terapia de Aprendizaje</h3>
             <p>Cada niño aprende de manera única. Nuestros expertos en terapia de aprendizaje utilizan enfoques innovadores y personalizados para mejorar las habilidades cognitivas, promoviendo estrategias efectivas de aprendizaje que se ajustan a las necesidades individuales.</p>
              <Link to="/trainning" className="call-to-action solid blue">Aprende más</Link>
          </div>
            <div className="coverpage__image-container">
              <div className="image grow-image">
                <img src={image_1} />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section className="section-page themes overflow-hide">
    
      <div className="centered side-padding">
      <div className="pattern footer top"></div>
      <div className=" section-box flex flex-columns-rows nowrap gap-4 even-flex">
          <div className='flex flex-columns gap-4 zindex-1 green-bg padding-2 border-radius colored-cage'>
          <div className="coverpage__text-container">
             <h3>Terapia de lenguaje</h3>
             <p>La comunicación es esencial en el desarrollo infantil. Nuestros especialistas en terapia de lenguaje trabajan para fortalecer habilidades verbales y no verbales, ayudando a los niños a expresarse con confianza y claridad.</p>
              <Link to="/trainning" className="call-to-action solid orange">Aprende más</Link>
          </div>
            <div className="coverpage__image-container">
              <div className="image grow-image">
                <img src={image_2} />
               </div>
            </div>

          </div>
          <div className='flex flex-columns columns-reverse even-flex gap-4 position-rel zindex-1 green-bg padding-2 border-radius colored-cage'>
            <div className="coverpage__image-container">
              <div className="image grow-image">
                <img src={image_3} />
               </div>
            </div>
            <div className="coverpage__text-container">
             <h3>Psicología infantil</h3>
              <p>Entendemos las complejidades emocionales de la infancia. Nuestros psicólogos infantiles ofrecen un espacio seguro donde los niños pueden explorar sus emociones, desarrollar habilidades para enfrentar desafíos y fortalecer su bienestar emocional.</p>
              <Link to="/trainning" className="call-to-action solid orange">Aprende más</Link>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <section className="section-page themes xl-vertical-padding">
      <div className="centered side-padding">
      <div className=" section-box flex colored-cage magenta-bg side-padding vertical-padding overflow-hide position-rel">
      <div className="pattern bluish"></div>
          <div className='flex align-items flex-columns-rows even-flex gap-4 position-rel zindex-1'>
          <div className="coverpage__text-container">
             <h3>Regularización</h3>
             <p>En JOY Center Kids, creemos en la importancia de construir bases sólidas en el aprendizaje. Nuestros programas de regularización están diseñados para reforzar conceptos académicos, cerrar brechas y cultivar una sólida comprensión en áreas clave del conocimiento.</p>
              <Link to="/trainning" className="call-to-action solid blue">Aprende más</Link>
          </div>
            <div className="coverpage__image-container">
              <div className="image grow-image">
                <img src={image_4} />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    
    
    <section className="section-page no-padding-bottom">
      <div className="centered side-padding">
        <div className="coverpage__text-container center-text large xl-vertical-padding">
          <h4>JOY center KIDS</h4>
          {/* <h3>¿Cómo formar niños competentes a través de la gamificación?</h3> */}
          <p>En JOY Center Kids, estamos comprometidos con el crecimiento, la confianza y el bienestar de cada niño. ¡Únete a nosotros en el viaje hacia un desarrollo positivo y lleno de alegría!</p>
        </div>
        {/* <div className='coverpage__activities-container flex three-flex no-padding-bottom wrap'>
          <div className='activities__text-container center-text'>
            <h4>Optimismo</h4>
          </div>
          <div className='activities__text-container center-text'>
            <h4>Responsabilidad</h4>
          </div>
          <div className='activities__text-container center-text'>
            <h4>Persistencia</h4>
          </div>
        </div> */}
      </div>
    </section>
</>
  )
}
