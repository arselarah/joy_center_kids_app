import React from 'react'
import { motion as m } from 'framer-motion'
import image_1 from '../assets/images/pexels-cottonbro-studio-3661388.jpg'
import image_2 from '../assets/images/pexels-nikita-grishin-16114766.jpg'
import image_3 from '../assets/images/pexels-cottonbro-studio-4835434.jpg'
import { Link } from 'react-router-dom'
// import image_4 from '../assets/images/pexels-porapak-apichodilok-346779.jpg'
// import image_5 from '../assets/images/pexels-artem-podrez-6941689.jpg'

export const Programs = () => {
  return (
    <>
    <m.div className="hero inner-page"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <div className="centered side-padding">
            <div className="hero__text-container z-[1]">
              <h1 className='text-[var(--color-button-one)]'>Programas</h1>
              <h2>Conoce nuestros programas</h2>
              
            </div>
            <div className="pattern bluish"></div>
            <div className="pattern footer righty"></div>
        </div>
    </m.div>
    <m.section className="section-page xl-vertical-padding"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
      <div className='centered side-padding'>
        <div className="section-box flex flex-columns-rows wrap gap-4">
          <div className='flex align-items flex-columns-rows even-flex-0 gap-4 zindex-1 wrap'>
            <div className="coverpage__text-container flex flex-columns">
                <div className="image">
                  <img src={image_1} />
                </div>
              <h3 className='padding-top-2'>Edades de 3 a 5</h3>
                <p>Potencializa la manera en que generan su propia opinión del mundo,  ampliando su desarrollo sensorial, motor y cognitivo.</p>
                <Link to="/mini-game-one" className="call-to-action solid orange">Aprende jugando</Link>
            </div>
          {/* </div>
          <div className='flex align-items flex-columns-rows even-flex gap-4 zindex-1'>   */}
            <div className="coverpage__text-container">
              <div className="image">
                <img src={image_2} />
               </div>
               <h3 className='padding-top-2'>Edades de 6 a 9</h3>
              <p>Ampliar su campo de asertividad con un plano afectivo - emocional  contribuyendo al éxito en su desarrollo.</p>
              <Link to="/mini-game-one" className="call-to-action solid orange">Aprende jugando</Link>
            </div>
          {/* </div>

          <div className='flex align-items flex-columns-rows even-flex gap-4 zindex-1'> */}
            <div className="coverpage__text-container">
                <div className="image">
                  <img src={image_3} />
                </div>
              <h3 className='padding-top-2'>Edades de 10 a 12</h3>
                <p>El  autocontrol y el  liderazgo estarán presentes como un factor resolutivo durante toda su vida.</p>
                <a className="call-to-action solid orange">Aprende jugando</a>
            </div>
          

          </div>
        </div>
      </div>
    </m.section>
    <section className="section-page no-padding-bottom">
      <div className="centered side-padding">
        <div className="coverpage__text-container center-text large xl-vertical-padding">
          <h4>JOY center KIDS</h4>
          <h3>¿Cómo formar niños competentes a través de la gamificación?</h3>
          <p>El juego es algo fundamental en las primeras etapas de la vida. Trasladando la mecánica de los juegos al ámbito educativo, los niños absorben de una mejor manera los conocimientos y habilidades. Se recurre así a la utilización de juegos como una forma de motivarlos en su proceso de aprendizaje, haciéndolo más divertido. Eso es la gamificación, técnica de aprendizaje en la que se usan las dinámicas propias del juego en entornos que no tienen por qué ser lúdicos, logrando así una mayor conexión con los niños y, como consecuencia, mejores resultados en su desarrollo.</p>
        </div>
        <div className='coverpage__activities-container flex three-flex no-padding-bottom wrap'>
          <div className='activities__text-container center-text'>
            <h4>Optimismo</h4>
          </div>
          <div className='activities__text-container center-text'>
            <h4>Responsabilidad</h4>
          </div>
          <div className='activities__text-container center-text'>
            <h4>Persistencia</h4>
          </div>
        
        </div>
      </div>
    </section>
    </>
  )
}
