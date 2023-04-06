import React from 'react'
import { motion as m } from 'framer-motion'
import image_1 from '../assets/images/pexels-alexander-grey-1148998.jpg'
import image_2 from '../assets/images/pexels-artem-podrez-6941672.jpg'
import { Slider } from '../components/Slider'
// import { Star } from '../shapes/star'
// import { Circle } from '../shapes/Circle'

// document.addEventListener("mousemove", parallax);
// function parallax(e){
//     document.querySelectorAll(".object").forEach(function(move){
//         var moving_value = move.getAttribute("data-value");
//         var x = (e.clientX * moving_value) / 250;
//         var y = (e.clientY * moving_value) / 250;

//         move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";

//     });
// }

const slides = [
    {
        url:"https://images.pexels.com/photos/9660876/pexels-photo-9660876.jpeg",
        title: "Se un explorador",
    },
    {
        url:"https://images.pexels.com/photos/5560513/pexels-photo-5560513.jpeg",
        title: "Se un astronauta",
    },
    {
        url:"https://images.pexels.com/photos/6203492/pexels-photo-6203492.jpeg",
        title: "Se un superhéroe",
    },
];

export const IndexPage = () => {

  return (
    <>
    <m.div className="hero main flex margin-bottom-5"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        {/* <div className="star beige object" data-value="10">
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
        <div class="hexagon object orange" data-value="5"></div> */}
        <div className="cloud-big object cloud-5" data-value="7"></div>
        <div className="cloud object cloud-1" data-value="19"></div>
        <div className="cloud object cloud-2" data-value="23"></div>
        <div className="cloud object cloud-3" data-value="1"></div>
        <div className="cloud object cloud-4" data-value="4"></div>
            <div className="centered">
                <div className="hero__text-container">
                  <h1>JOY center KIDS</h1>
                  <h2>El único límite es tu imaginación</h2>
                  <a className='hero__learn-more call-to-action solid orange'>Aprende más</a>
                </div>
            </div>
            
            
        </m.div>
        {/* <div className='container-shape negative-margin-top-15'>
        <div className="hero__rounded-bar"></div>

        </div> */}
    <m.section className='coverpage colored-cage world-canvas overflow-hide padding-top-2'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        
        <div className="centered side-padding">
        {/* <div className="pattern bluish"></div> */}
            <div className="coverpage__container flex flex-columns-rows left-flex-xs gap-4 zindex-1 position-rel padding-top-2 justify-end">
                <div className="coverpage__text-container even-flex">
                    <h3>¿Qué es <span className='joy'><i>J</i><i>O</i><i>Y</i></span>?</h3>
                    <p>En JOY nos encanta ver a los niños aprender, para lograrlo  la motivación es fundamental, nuestra meta es obtener motivación 3.0. Nuestro sistema de aprendizaje enfocado a la Gamificación es mediante técnicas de juegos, que otorgan la motivación para que los niños incrementen sus capacidades intelectuales, mejoren sus resultados académicos, generen autodeterminación y su inteligencia emocional esté presente en su desarrollo.</p>
                    <a className="call-to-action solid orange">Aprende más</a>
                </div>
                <div className="coverpage__image-container even-flex">
                    {/* <div className="clipped image">
                    <img src={image_1} />
                    </div> */}
                </div>
            </div>
            
        </div>
    </m.section>
    <section className='coverpage position-rel overflow-hide'>
    
        {/* <div className="coverpage__rounded-bar position-rel zindex-1"></div> */}
        <div className="coverpage__container full-width">
            <div className="centered">

                <div className="coverpage__text-container center-text medium">
                    <h3>¿Por que el juego es tan importante en <span className='joy'><i>J</i><i>O</i><i>Y</i></span>?</h3>
                    <p>El juego es algo fundamental para la vida. Con técnicas de gamificación los niños obtienen de forma intrínseca lo necesario para potencializar conocimientos y habilidades. Se sentirán motivados e interesados en aprender.</p>
                </div>
                <div className="coverpage__cubes-container flex flex-columns-rows three-flex gap-4">
                    <div>
                        <div className='cube orange colored-cage'>
                            <h4>Infants</h4>
                            <p>Children anywhere from birth to 1 year old.</p>
                        </div>
                    </div>
                    <div>
                    <div className='cube blue colored-cage'>
                            <h4>Toddler</h4>
                            <p>Children anywhere from 1 to 3 year old.</p>
                        </div>
                    </div>
                    <div>
                    <div className='cube yellow colored-cage'>
                            <h4>Preschool</h4>
                            <p>Children anywhere from 3 to 5 year old.</p>
                        </div>
                    </div>
            </div>
                </div>
            </div>
        
        <div className="centered side-padding">
        <div className="pattern footer top"></div>
        <div className="pattern footer bottom"></div>
            <div className="coverpage__container full-width position-rel zindex-1">
                <div className="coverpage__text-container center-text medium padding-bottom-4">
                    <h3>¿Beneficios en <span className='joy'><i>J</i><i>O</i><i>Y</i></span>?</h3>
                    <p>El desarrollo de competencias es un requisito esencial para lograr el éxito personal y profesional, formar niños competentes es el primer paso para ayudar a los hijos en su desarrollo interno generando una confianza en ellos para el cumplimiento de objetivos.</p>
                </div>
                <div className='coverpage__activities-container flex padding-bottom-4 flex-columns-rows three-flex wrap'>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container'>
                        <div className='hexagon red activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Motivación para el aprendizaje</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container position-rel'>
                            <div className='hexagon bluish activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Realización de objetivos</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container'>
                        <div className='hexagon yellow activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Desarrollo de habilidades</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container'>
                        <div className='hexagon blue activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Incremento de conocimiento</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container'>
                        <div className='hexagon orange activities'></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Capacidad de comunicación</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div className='flex even-flex padding-bottom-2'>
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
            <div className="coverpage__container flex align-items flex-columns-to-rows-reverse left-flex-xs gap-4 even-flex  position-rel zindex-1">
                <div className="coverpage__text-container">
                    <h3>Vive la experiencia <span className='joy'><i>J</i><i>O</i><i>Y</i></span></h3>
                    <p>Comparte estos mismos valores y que quiere vivir en familia de una manera divertida y estimulante.</p>
                    <a className="call-to-action solid blue">Aprende más</a>
                </div>
                <div className="coverpage__image-container">
                    <div className="clipped image rounded-[2rem]">
                    {/* <img src={image_2} /> */}
                    {/* <Slider>
                        {slides.map((s) => (<img src={s} />))}
                    </Slider>     */}
                    <Slider>
                    {
                    slides.map((s) => (
                        <div className='prueba relative grow-image'>
                            <img className="min-w-full object-cover object-center max-h-[550px] min-h-[550px]" src={s.url} />
                            <p className="absolute p-4 inset-x-0 bottom-0 h-20 z-1 text-white font-semibold text-2xl text-center align-middle">{s.title} </p>
                        </div>
                    ))
                    }
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
