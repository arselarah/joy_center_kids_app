import React from 'react'
import { motion as m } from 'framer-motion'
import image_1 from '../assets/images/pexels-alexander-grey-1148998.jpg'
import image_2 from '../assets/images/pexels-artem-podrez-6941672.jpg'
import { Star } from '../shapes/star'
import { Circle } from '../shapes/Circle'

document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 190;
        var y = (e.clientY * moving_value) / 190;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

    });
}

export const IndexPage = () => {

  return (
    <>
    <m.div className="hero main"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <div className="star beige object" data-value="10">
            <Star />
        </div>
        <div className="circle bluish object" data-value="2">
            <Circle />
        </div>
        <div className="star red object" data-value="-3">
            <Star />
        </div>
        <div className="circle yellow object" data-value="-9">
            <Circle />
        </div>
        <div class="hexagon object orange" data-value="5"></div>
            <div className="centered">
                <div className="hero__text-container">
                  <h1>JOY center KIDS</h1>
                  <h2>El límite de tu imaginación es el cielo</h2>
                  <a className='hero__learn-more call-to-action solid blue'>Aprende más</a>
                </div>
            </div>
            
            <div className="hero__rounded-bar"></div>
        </m.div>
    <m.section className='coverpage dark-blue-bg colored-cage'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <div className="pattern bluish"></div>
        <div className="centered side-padding">
            <div className="coverpage__container flex align-items">
                <div className="coverpage__text-container">
                    <h3>¿Qué es <span className='yellow'>JOY</span>?</h3>
                    <p>En JOY nos encanta ver a los niños aprender, para lograrlo  la motivación es fundamental, nuestra meta es obtener motivación 3.0. Nuestro sistema de aprendizaje enfocado a la Gamificación es mediante técnicas de juegos, que otorgan la motivación para que los niños incrementen sus capacidades intelectuales, mejoren sus resultados académicos, generen autodeterminación y su inteligencia emocional esté presente en su desarrollo.</p>
                    <a className="call-to-action solid orange">Aprende más</a>
                </div>
                <div className="coverpage__image-container">
                    <div className="clipped image">
                    <img src={image_1} />
                    </div>
                </div>
            </div>
            <div className="coverpage__container full-width">
                <div className="coverpage__text-container center-text medium">
                    <h3>¿Por que el juego es tan importante en <span className="bluish">JOY</span>?</h3>
                    <p>El juego es algo fundamental para la vida. Con técnicas de gamificación los niños obtienen de forma intrínseca lo necesario para potencializar conocimientos y habilidades. Se sentirán motivados e interesados en aprender.</p>
                </div>
                <div className="coverpage__cubes-container flex">
                    <div>
                        <div className='cube red'>
                            <h4>Infants</h4>
                            <p>Children anywhere from birth to 1 year old.</p>
                        </div>
                    </div>
                    <div>
                    <div className='cube orange'>
                            <h4>Toddler</h4>
                            <p>Children anywhere from 1 to 3 year old.</p>
                        </div>
                    </div>
                    <div>
                    <div className='cube yellow'>
                            <h4>Preschool</h4>
                            <p>Children anywhere from 3 to 5 year old.</p>
                        </div>
                    </div>
                    <div>
                    <div className='cube blue'>
                            <h4>Flex-care</h4>
                            <p>Children anywhere after the ages of  5.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </m.section>
    <section className='coverpage light-bg'>
    <div className="pattern footer top"></div>
    <div className="pattern footer bottom"></div>
        <div className="coverpage__rounded-bar"></div>
        
        <div className="centered side-padding">
            <div className="coverpage__container full-width">
                <div className="coverpage__text-container center-text medium">
                    <h3>¿Beneficios en <span className="yellow">JOY</span> ?</h3>
                    <p>El desarrollo de competencias es un requisito esencial para lograr el éxito personal y profesional, formar niños competentes es el primer paso para ayudar a los hijos en su desarrollo interno generando una confianza en ellos para el cumplimiento de objetivos.</p>
                </div>
                <div className='coverpage__activities-container flex'>
                    <div>
                        <div className='activities__icon-container'>
                        <div className='hexagon red activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Motivación para el aprendizaje</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div>
                        <div className='activities__icon-container position-rel'>
                            <div className='hexagon bluish activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Realización de objetivos</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div>
                        <div className='activities__icon-container'>
                        <div className='hexagon yellow activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Desarrollo de habilidades</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div>
                        <div className='activities__icon-container'>
                        <div className='hexagon blue activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Incremento de conocimiento</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div>
                        <div className='activities__icon-container'>
                        <div className='hexagon orange activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Capacidad de comunicación</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div>
                        <div className='activities__icon-container'>
                        <div className='hexagon dark-blue activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Manejo de emociones</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="coverpage__container flex align-items">
                <div className="coverpage__text-container">
                    <h3>Ven y conócenos</h3>
                    <p>We will explain everything you are intereste. Join our new session. If you have any questions or enquiries please feel free to contact us on the following details provided below or alternatively you can complete our online enquiry form also located below and we will get back to you as soon as possible…</p>
                    <a className="call-to-action solid blue">Aprende más</a>
                </div>
                <div className="coverpage__image-container">
                    <div className="clipped image">
                    <img src={image_2} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
