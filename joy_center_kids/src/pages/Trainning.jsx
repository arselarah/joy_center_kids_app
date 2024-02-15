import React from 'react'
import { motion as m } from 'framer-motion'
import image_1 from '../assets/images/pexels-cottonbro-studio-3661388.jpg'
import image_2 from '../assets/images/pexels-nikita-grishin-16114766.jpg'
import image_3 from '../assets/images/pexels-cottonbro-studio-4835434.jpg'
import image_mentales from '../assets/images/mental.jpg'
import image_cerebral from '../assets/images/cerebral.jpg'
import image_sombreros from '../assets/images/sombreros.jpg'
import { Link } from 'react-router-dom'
import image_mnemotecnia from '../assets/images/concepto-memoria-piezas-rompecabezas-cabeza_23-2149320948.jpg'
// import image_5 from '../assets/images/pexels-artem-podrez-6941689.jpg'

export const Trainning = () => {
  return (
    <>
    <m.div className="hero inner-page"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <div className="centered side-padding">
            <div className="hero__text-container z-[1]">
              <h1 className='text-[var(--color-button-one)]'>Trainning</h1>
              <h2>Conoce nuestros talleres de entrenamiento cerebral</h2>
              
            </div>
            <div className="pattern bluish"></div>
            <div className="pattern footer righty"></div>
        </div>
    </m.div>
    <m.section className="section-page themes overflow-hide xl-vertical-padding "
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
    
      <div className="centered side-padding">
      {/* <div className="pattern footer top"></div> */}
      <div className=" section-box flex flex-columns-rows nowrap gap-4 even-flex">
          <div className='flex flex-columns gap-4 zindex-1 blue-bg padding-2 border-radius colored-cage'>
          <div className="coverpage__text-container">
             <h3>Mapas mentales</h3>
             <p>Los mapas mentales son una herramienta increíblemente poderosa que les permite organizar sus ideas, estimular su creatividad y desarrollar habilidades de pensamiento creativo desde temprana edad. Con ellos, nuestros pequeños exploradores pueden visualizar conexiones, expandir su conocimiento y construir un camino hacia la felicidad.⁣</p>
              {/* <Link to="/programs" className="call-to-action solid orange">Aprende más</Link> */}
          </div>
            <div className="coverpage__image-container">
              <div className="image grow-image">
                <img src={image_mentales} />
               </div>
            </div>

          </div>
          <div className='flex flex-columns columns-reverse even-flex gap-4 position-rel zindex-1 yellow-bg padding-2 border-radius colored-cage'>
            <div className="coverpage__image-container">
              <div className="image grow-image">
                <img src={image_cerebral} />
               </div>
            </div>
            <div className="coverpage__text-container">
             <h3>Gimnasia cerebral</h3>
              <p>La gimnasia cerebral es una poderosa herramienta que estimula y desarrolla el potencial cognitivo de los más pequeños. ¡Aquí te presentamos las tres mayores ventajas que ofrece esta disciplina fascinante!⁣</p>
              <ul>
                <li>Potencia la concentración y la atención⁣</li>
                <li>Estimula la creatividad y la imaginación⁣⁣</li>
                <li>Mejora el rendimiento académico</li>
              </ul>

              {/* <Link to="/programs" className="call-to-action solid orange">Aprende más</Link> */}
            </div>
          </div>
        </div>
        
      </div>
    </m.section>
    <section className="section-page themes overflow-hide">
    
      <div className="centered side-padding">
      <div className="pattern footer top"></div>
      <div className=" section-box flex flex-columns-rows nowrap gap-4 even-flex">
          <div className='flex flex-columns gap-4 zindex-1 green-bg padding-2 border-radius colored-cage'>
          <div className="coverpage__text-container">
             <h3>Cuidemos nuestro planeta</h3>
             <p>En este taller único y divertido, los niños tendrán la oportunidad de explorar y aprender usando el poder de los Seis Sombreros Mágicos para Pensar. ¿Qué podrán esperar?⁣⁣</p>
              <ul>
                <li>Potenciamiento del desarrollo del pensamiento lateral: ¡La creatividad!⁣</li>
                <li>Manejo de emociones para decisiones asertivas: ¡Empoderamos a los niños!⁣⁣</li>
                <li>Ver desde diferentes perspectivas: ¡Encontrar soluciones equilibradas y bien pensadas!</li>
              </ul>
             
             
             
              {/* <Link to="/programs" className="call-to-action solid orange">Aprende más</Link> */}
          </div>
            <div className="coverpage__image-container">
              <div className="image grow-image">
                <img src={image_sombreros} />
               </div>
            </div>

          </div>
          <div className='flex flex-columns columns-reverse even-flex gap-4 position-rel zindex-1 padding-2 border-radius colored-cage orange-bg'>
            <div className="coverpage__image-container">
              <div className="image grow-image">
                <img src={image_mnemotecnia} />
               </div>
            </div>
            <div className="coverpage__text-container">
             <h3>Mnemotecnias</h3>
              <p>Es una técnica intelectual para facilitar la memorización, consiste en establecer una asociación o vinculo para recordar información con mayor facilidad.</p>
              <p>Saber aprovechar los recursos que disponemos para facilitar y potenciar el aprendizaje es un indicativo de cultura e inteligencia.</p>
              {/* <Link to="/programs" className="call-to-action solid orange">Aprende más</Link> */}
            </div>
          </div>
        </div>
        
      </div>
    </section>
    {/* <section className="section-page xl-vertical-padding">
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
            </div> */}
          {/* </div>
          <div className='flex align-items flex-columns-rows even-flex gap-4 zindex-1'>   */}
            {/* <div className="coverpage__text-container">
              <div className="image">
                <img src={image_2} />
               </div>
               <h3 className='padding-top-2'>Edades de 6 a 9</h3>
              <p>Ampliar su campo de asertividad con un plano afectivo - emocional  contribuyendo al éxito en su desarrollo.</p>
              <Link to="/mini-game-one" className="call-to-action solid orange">Aprende jugando</Link>
            </div> */}
          {/* </div>

          <div className='flex align-items flex-columns-rows even-flex gap-4 zindex-1'> */}
            {/* <div className="coverpage__text-container">
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
    </section> */}
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
