import React from 'react'
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import image_1 from '../assets/images/pexels-julia-m-cameron-4144099.jpg'
import image_2 from '../assets/images/pexels-gustavo-fring-5621933.jpeg'
import image_3 from '../assets/images/pexels-keira-burton-6623833.jpg'
import image_4 from '../assets/images/pexels-ksenia-chernaya-8535236.jpg'
import image_5 from '../assets/images/pexels-yan-krukau-8613169.jpg'

export const Themes = () => {
  return (
    <>
    <m.div className="hero inner-page"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <div className="centered">
            <div className="hero__text-container">
              <h1>Temas</h1>
              <h2>Hablemos de lo que nos importa en JOY center KIDS</h2>
              
            </div>
        </div>
    </m.div>
    <m.section className="section-page themes"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
      <div className='centered'>
        <div className="blue-bg section-box flex colored-cage">
          <div className='flex'>
          <div className="coverpage__text-container">
             <h3>Autodeterminación</h3>
             <p>Favorecer la autodeterminación en nuestros niños es garantía de que, al margen de sus capacidades, podrán tener un proyecto de vida con base en su individualidad y así ejercer control sobre sí mismos. A la hora de educar a un niño es importante sentir empatía por él. Para seguir unas normas es importante que los niños entiendan el porqué de estas y estén de acuerdo con ellas.</p>
              <a className="call-to-action solid orange">Aprende más</a>
          </div>
            <div className="coverpage__image-container">
              <div className="image">
                <img src={image_1} />
               </div>
            </div>

          </div>
          <div className='flex'>
            <div className="coverpage__image-container">
              <div className="image">
                <img src={image_3} />
               </div>
            </div>
            <div className="coverpage__text-container">
             <h3>Matemáticas - Maestría</h3>
              <p>Las matemáticas son fundamentales para el desarrollo intelectual de los niños, les ayuda a ser lógicos, a razonar ordenadamente y a tener una mente preparada para el pensamiento, la crítica y la abstracción.</p>
              <a className="call-to-action solid orange">Aprende más</a>
            </div>
          </div>
        </div>
        
      </div>
    </m.section>
    <section className="section-page themes bridge-bg">
      <div className="centered">
      <div className=" section-box flex">
          <div className='flex'>
          <div className="coverpage__text-container">
             <h3>Desarrollo de competencias</h3>
             <p>Dejar que haga las cosas por sí mismo desarrolla en un niño sus capacidades generales que potencian el conocimiento que surge de una situación específica, hacia diversas situaciones  de manera flexible en los distintos contextos de la vida.</p>
              <a className="call-to-action solid orange">Aprende más</a>
          </div>
            <div className="coverpage__image-container">
              <div className="image">
                <img src={image_2} />
               </div>
            </div>

          </div>
          <div className='flex'>
            <div className="coverpage__image-container">
              <div className="image">
                <img src={image_4} />
               </div>
            </div>
            <div className="coverpage__text-container">
             <h3>Resolución de retos</h3>
              <p>Los retos son un motor muy importante para el aprendizaje de los niños, que los incita a “moverse” para conseguir una meta con significado para ellos y los estimula para conseguir sus objetivos. Para llegar a estos objetivos es fundamental la aparición de la motivación, que constituye, sin duda alguna, la clave del aprendizaje.</p>
              <a className="call-to-action solid orange">Aprende más</a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    <section className="section-page themes">
      <div className="centered">
      <div className=" section-box flex colored-cage dark-blue-bg">
          <div className='flex'>
          <div className="coverpage__text-container">
             <h3>Inteligencia emocional</h3>
             <p>Capacidad de ser inteligente con respecto a los sentimientos, los propios y los de otras personas. Eso significa inteligencia emocional. Al estar en constante aprendizaje, un niño se enfrenta a retos todo el tiempo; a nivel escolar y personal, la inteligencia emocional ayudará al niño a que enfrente dichos retos de manera positiva y con un gran manejo de la frustración. La inteligencia emocional favorece el conocimiento de las emociones, ayudando a expresarlas de manera efectiva y así, encontrar soluciones.</p>
              <a className="call-to-action solid orange">Aprende más</a>
          </div>
            <div className="coverpage__image-container">
              <div className="image">
                <img src={image_5} />
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section className="section-page last">
      <div className="centered">
        <div className="coverpage__text-container center-text large">
          <h4>JOY center KIDS</h4>
          <h3>¿Cómo formar niños competentes a través de la gamificación?</h3>
          <p>El juego es algo fundamental en las primeras etapas de la vida. Trasladando la mecánica de los juegos al ámbito educativo, los niños absorben de una mejor manera los conocimientos y habilidades. Se recurre así a la utilización de juegos como una forma de motivarlos en su proceso de aprendizaje, haciéndolo más divertido. Eso es la gamificación, técnica de aprendizaje en la que se usan las dinámicas propias del juego en entornos que no tienen por qué ser lúdicos, logrando así una mayor conexión con los niños y, como consecuencia, mejores resultados en su desarrollo.</p>
        </div>
        <div className='coverpage__activities-container flex'>
          <div className='activities__text-container center-text'>
            <h4>Optimismo</h4>
          </div>
          <div className='activities__text-container center-text'>
            <h4>Responsabilidad</h4>
          </div>
          <div className='activities__text-container center-text'>
            <h4>Persistencia</h4>
          </div>
        <Link to="/programs" className="call-to-action solid blue centered-button">Programas JOY</Link>
        </div>
      </div>
    </section>
</>
  )
}