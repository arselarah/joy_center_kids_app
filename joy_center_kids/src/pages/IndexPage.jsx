import React from 'react'
import { motion as m } from 'framer-motion'
import mayas from '../assets/images/mayas.png'
import fosil from '../assets/images/fosil.png'
import bears from '../assets/images/osos.png'
import artist from '../assets/images/artist.png'
import sports from '../assets/images/deportes.png'
import observatorio from '../assets/images/observatorio.png'
import submarino from '../assets/images/submarino.png'
import expedicion from '../assets/images/expedicion.png'
import { Slider } from '../components/Slider'
import { Rocket } from '../components/Rocket'
import { Link, NavLink } from 'react-router-dom'



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
        title: "Conviértete en explorador",
    },
    {
        url:"https://images.pexels.com/photos/5560522/pexels-photo-5560522.jpeg",
        title: "Conviértete en astronauta",
    },
    // {
    //     url:"https://images.pexels.com/photos/8223960/pexels-photo-8223960.jpeg",
    //     title: "Conviértete en un gran deportista",
    // },
];

export const IndexPage = () => {

  return (
    <>
    <m.div className="hero main flex margin-bottom-5"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <Rocket />
        
        <div className="cloud-big object cloud-5" data-value="7"></div>
        <div className="cloud object cloud-1" data-value="19"></div>
        <div className="cloud object cloud-2" data-value="23"></div>
        <div className="cloud object cloud-3 z-[3]" data-value="1"></div>
        <div className="cloud object cloud-4 z-[4]" data-value="4"></div>
            <div className="centered">
                <div className="hero__text-container z-[4]">
                  <h1>JOY center KIDS</h1>
                  <h2 className='px-[.5rem]'>El único límite es tu imaginación</h2>
                  <Link to={'/themes'} className='hero__learn-more call-to-action solid orange'>Aprende más</Link>
                </div>
            </div>
            
           
        </m.div>
    <m.section className='coverpage colored-cage world-canvas overflow-y-visible overflow-x-clip padding-top-2'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        
        
        <div className="centered side-padding">
            <div className="map-item osos absolute xm:top-[30%] lg:top-[40%] left-[25%] z-[1]">
                <div className="pop-up absolute z-[1] p-[2rem] right-[0%] top-[-8rem] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
                    <p className=''>Completa la misión</p>
                    <Link to="/programs" className='call-to-action solid bluish ms-[auto] me-[auto]'>Jugar</Link>
                </div>
            <img className='bouncing-object max-w-[80%] ms-[auto] me-[auto] z-[-1]' src={bears} alt="Osos" />
            </div>


            <div className="map-item artistas absolute xm:top-[200%] md:top-[970%] lg:top-[140%] right-[30%] z-[2]">
                <div className="pop-up absolute z-[1] p-[2rem] right-[0%] top-[-8rem] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
                    <p className=''>Completa la misión</p>
                    <Link to="/programs" className='call-to-action solid bluish ms-[auto] me-[auto]'>Jugar</Link>
                </div>
            <img className='bouncing-object max-w-[80%] ms-[auto] me-[auto]' src={artist} alt="Artistas" />
            </div>


            <div className="map-item mayas absolute xm:top-[350%] sm:top-[1000%] md:top-[1400%] lg:top-[190%]">
                <div className="pop-up absolute z-[1] p-[2rem] xm:right-[-100%] top-[-8rem] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg ">
                    <p className=''>Completa la misión</p>
                    <Link to="/programs" className='call-to-action solid bluish ms-[auto] me-[auto]'>Jugar</Link>
                </div>
            <img className='bouncing-object max-w-[80%] ms-[auto] me-[auto] z-[-1]' src={mayas} alt="Mayas" />
            </div>

            
            <div className="map-item deportes absolute xm:top-[260%] md:top-[700%] lg:top-[70%] right-[0%] z-[3]">
                <div className="pop-up absolute z-[1] p-[2rem] right-[0%] top-[-8rem] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
                    <p className=''>Completa la misión</p>
                    <Link to="/programs" className='call-to-action solid bluish ms-[auto] me-[auto]'>Jugar</Link>
                </div>
            <img className='bouncing-object max-w-[80%] ms-[auto] me-[auto]' src={sports} alt="Deportes" />
            </div>
            
            <div className="map-item arqueologia absolute xm:top-[550%] md:top-[2000%] lg:top-[220%] right-[30%]">
                <div className="pop-up absolute z-[1] p-[2rem] right-[0%] top-[-8rem] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
                    <p className=''>Completa la misión</p>
                    <Link to="/programs" className='call-to-action solid bluish ms-[auto] me-[auto]'>Jugar</Link>
                </div>
            <img className='bouncing-object max-w-[80%] ms-[auto] me-[auto]' src={fosil} alt="Fosil" />
            </div>

            <div className="map-item observatorio absolute xm:top-[800%] md:top-[1300%] lg:top-[130%] right-[0%] z-[3]">
                <div className="pop-up absolute z-[1] p-[2rem] right-[0%] top-[-8rem] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
                    <p className=''>Completa la misión</p>
                    <Link to="/programs" className='call-to-action solid bluish ms-[auto] me-[auto]'>Jugar</Link>
                </div>
            <img className='bouncing-object max-w-[80%] ms-[auto] me-[auto]' src={observatorio} alt="Observatorio" />
            </div>

            <div className="map-item submarino absolute xm:top-[850%] sm:top-[1500%] md:top-[2400%] lg:top-[250%] left-[30%]">
                <div className="pop-up absolute z-[1] p-[2rem] xm:right-[-100%] top-[-8rem] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg ">
                    <p className=''>Completa la misión</p>
                    <Link to="/programs" className='call-to-action solid bluish ms-[auto] me-[auto]'>Jugar</Link>
                </div>
            <img className='bouncing-object max-w-[80%] ms-[auto] me-[auto] z-[-1]' src={submarino} alt="Submarino" />
            </div>

            <div className="map-item expedicion absolute xm:top-[100%] sm:top-[300%] lg:top-[100%] left-[5%]">
                <div className="pop-up absolute z-[1] p-[2rem] xm:right-[-100%] top-[-8rem] rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg ">
                    <p className=''>Completa la misión</p>
                    <Link to="/programs" className='call-to-action solid bluish ms-[auto] me-[auto]'>Jugar</Link>
                </div>
            <img className='bouncing-object max-w-[80%] ms-[auto] me-[auto] z-[-1]' src={expedicion} alt="Expedicion" />
            </div>
       
            
        {/* <div className="pattern bluish"></div> */}
            <div className="coverpage__container flex flex-columns-rows left-flex-xs gap-4 zindex-1 position-rel padding-top-2 justify-end">
                <div className="coverpage__text-container even-flex xm:hidden lg:block">
                    <h3>¿Qué es <span className='joy'><i>J</i><i>O</i><i>Y</i></span>?</h3>
                    <p>Es un centro de aprendizaje y motivación 3.0 donde nos encanta ver a los niños aprender. Nuestro sistema de trabajo enfocado a la Gamificación emplea técnicas de juegos, que otorgan la motivación necesaria para que los niños incrementen sus capacidades intelectuales, desarrollen autodeterminación, inteligencia emocional, pensamiento lógico y creativo. Todo de una manera divertida y muy emocionante.</p>
                    <Link to={'/themes'} className="call-to-action solid orange">Aprende más</Link>
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
    
        
        <div className="coverpage__container full-width xm:pt-[4rem] md:pt-[6rem] lg:pt-[12rem] z-[1]">
            
            <div className="centered side-padding">

                <div className="coverpage__text-container pb-[8rem] pt-[2rem] md:hidden">
                <h3>¿Qué es <span className='joy'><i>J</i><i>O</i><i>Y</i></span>?</h3>
                    <p>Es un centro de aprendizaje y motivación 3.0 donde nos encanta ver a los niños aprender. Nuestro sistema de trabajo enfocado a la Gamificación emplea técnicas de juegos, que otorgan la motivación necesaria para que los niños incrementen sus capacidades intelectuales, desarrollen autodeterminación, inteligencia emocional, pensamiento lógico y creativo. Todo de una manera divertida y muy emocionante.</p>
                    <Link to={'/themes'} className="call-to-action solid orange">Aprende más</Link>
                </div>

                <div className="coverpage__text-container center-text medium">
                    <h3>¿Por que el juego es tan importante en <span className='joy'><i>J</i><i>O</i><i>Y</i></span>?</h3>
                    <p>El juego es algo fundamental para la vida. Con técnicas de gamificación los niños obtienen de forma intrínseca lo necesario para potencializar conocimientos y habilidades. Se sentirán motivados e interesados en aprender.</p>
                </div>

                <div className="coverpage__cubes-container flex flex-columns-rows three-flex gap-4 relative">
                    <div className="card">
                        <div className='card__content relative'>
                            <div className='cube front orange colored-cage absolute top-0'>
                                <h4>Edades de 3 a 5</h4>
                                <p>Potencializa la manera en que generan su propia opinión del mundo,  ampliando su desarrollo sensorial, motor y cognitivo.</p>
                            </div>
                            <div className='cube back orange colored-cage align-middle grid absolute top-0'>
                                <Link to="/programs" className='call-to-action solid blue my-[auto] mx-[auto]'>Aprende más</Link>
                            </div>
                        </div>
                     </div>
                     <div className="card">
                        <div className='card__content relative'>
                            <div className='cube front blue colored-cage absolute top-0'>
                                <h4>Edades de 6 a 9</h4>
                                <p>Ampliar su campo de asertividad con un plano afectivo - emocional  contribuyendo al éxito en su desarrollo.</p>
                            </div>
                            <div className='cube back blue colored-cage align-middle grid absolute top-0'>
                                <Link to="/programs" className='call-to-action solid orange my-[auto] mx-[auto]'>Aprende más</Link>
                            </div>
                        </div>
                     </div>
                    
                     <div className="card">
                        <div className='card__content relative'>
                            <div className='cube front yellow colored-cage absolute top-0'>
                                <h4>Edades de 10 a 12</h4>
                                <p>El  autocontrol y el  liderazgo estarán presentes como un factor resolutivo durante toda su vida.</p>
                            </div>
                            <div className='cube back yellow colored-cage align-middle grid absolute top-0'>
                                <Link to="/programs" className='call-to-action solid blue my-[auto] mx-[auto]'>Aprende más</Link>
                            </div>
                        </div>
                     </div>
            </div>
                </div>
            </div>
        
        <div className="centered side-padding">
        <div className="pattern footer top z-[-1]"></div>
        <div className="pattern footer bottom"></div>
            <div className="coverpage__container full-width position-rel z-[1] xm:pt-[4rem] md:pt-[6rem] lg:pt-[12rem]">
                <div className="coverpage__text-container center-text medium padding-bottom-4">
                    <h3>¿Beneficios en <span className='joy'><i>J</i><i>O</i><i>Y</i></span>?</h3>
                    <p>El desarrollo de competencias es un requisito esencial para lograr el éxito personal y profesional, formar niños competentes es el primer paso para ayudar a los hijos en su desarrollo interno generando una confianza en ellos para el cumplimiento de objetivos.</p>
                </div>
                
                <div className='coverpage__activities-container flex padding-bottom-4 flex-columns-rows three-flex wrap'>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container'>
                        <picture>
                            <svg className='w-[60px] fill-[var(--color-red)]' viewBox="0 0 120.622 110">
                            <defs>
                                <clipPath >
                                <rect/>
                                </clipPath>
                            </defs>
                            <g>
                                <g clip-path="url(#clip-path)">
                                <path d="M80.134,110H40.488a20.666,20.666,0,0,1-17.9-10.333L2.769,65.332a20.663,20.663,0,0,1,0-20.666L22.591,10.333A20.666,20.666,0,0,1,40.488,0H80.134a20.664,20.664,0,0,1,17.9,10.333l19.824,34.333a20.671,20.671,0,0,1,0,20.666L98.031,99.667A20.664,20.664,0,0,1,80.134,110" />
                                </g>
                            </g>
                            </svg>
                        </picture>
                        </div>
                        <div className="activities__text-container">
                            <h4>Motivación para el aprendizaje</h4>
                            {/* <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p> */}
                        </div>
                    </div>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container position-rel'>
                        <picture>
                            <svg className='w-[60px] fill-[var(--color-bluish)]' viewBox="0 0 120.622 110">
                            <defs>
                                <clipPath >
                                <rect/>
                                </clipPath>
                            </defs>
                            <g>
                                <g clip-path="url(#clip-path)">
                                <path d="M80.134,110H40.488a20.666,20.666,0,0,1-17.9-10.333L2.769,65.332a20.663,20.663,0,0,1,0-20.666L22.591,10.333A20.666,20.666,0,0,1,40.488,0H80.134a20.664,20.664,0,0,1,17.9,10.333l19.824,34.333a20.671,20.671,0,0,1,0,20.666L98.031,99.667A20.664,20.664,0,0,1,80.134,110" />
                                </g>
                            </g>
                            </svg>
                        </picture>
                        </div>
                        <div className="activities__text-container">
                            <h4>Realización de objetivos</h4>
                            {/* <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p> */}
                        </div>
                    </div>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container'>
                        <picture>
                            <svg className='w-[60px] fill-[var(--color-yellow)]' viewBox="0 0 120.622 110">
                            <defs>
                                <clipPath >
                                <rect/>
                                </clipPath>
                            </defs>
                            <g>
                                <g clip-path="url(#clip-path)">
                                <path d="M80.134,110H40.488a20.666,20.666,0,0,1-17.9-10.333L2.769,65.332a20.663,20.663,0,0,1,0-20.666L22.591,10.333A20.666,20.666,0,0,1,40.488,0H80.134a20.664,20.664,0,0,1,17.9,10.333l19.824,34.333a20.671,20.671,0,0,1,0,20.666L98.031,99.667A20.664,20.664,0,0,1,80.134,110" />
                                </g>
                            </g>
                            </svg>
                        </picture>
                        </div>
                        <div className="activities__text-container">
                            <h4>Desarrollo de habilidades</h4>
                            {/* <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p> */}
                        </div>
                    </div>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container'>
                        <picture>
                            <svg className='w-[60px] fill-[var(--color-button-one)]' viewBox="0 0 120.622 110">
                            <defs>
                                <clipPath >
                                <rect/>
                                </clipPath>
                            </defs>
                            <g>
                                <g clip-path="url(#clip-path)">
                                <path d="M80.134,110H40.488a20.666,20.666,0,0,1-17.9-10.333L2.769,65.332a20.663,20.663,0,0,1,0-20.666L22.591,10.333A20.666,20.666,0,0,1,40.488,0H80.134a20.664,20.664,0,0,1,17.9,10.333l19.824,34.333a20.671,20.671,0,0,1,0,20.666L98.031,99.667A20.664,20.664,0,0,1,80.134,110" />
                                </g>
                            </g>
                            </svg>
                        </picture>
                        </div>
                        <div className="activities__text-container">
                            <h4>Incremento de conocimiento</h4>
                            {/* <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p> */}
                        </div>
                    </div>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container'>
                        <picture>
                            <svg className='w-[60px] fill-[var(--color-orange)]' viewBox="0 0 120.622 110">
                            <defs>
                                <clipPath >
                                <rect/>
                                </clipPath>
                            </defs>
                            <g>
                                <g clip-path="url(#clip-path)">
                                <path d="M80.134,110H40.488a20.666,20.666,0,0,1-17.9-10.333L2.769,65.332a20.663,20.663,0,0,1,0-20.666L22.591,10.333A20.666,20.666,0,0,1,40.488,0H80.134a20.664,20.664,0,0,1,17.9,10.333l19.824,34.333a20.671,20.671,0,0,1,0,20.666L98.031,99.667A20.664,20.664,0,0,1,80.134,110" />
                                </g>
                            </g>
                            </svg>
                        </picture>
                        </div>
                        <div className="activities__text-container">
                            <h4>Capacidad de comunicación</h4>
                            {/* <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p> */}
                        </div>
                    </div>
                    <div className='flex even-flex padding-bottom-2'>
                        <div className='activities__icon-container'>
                        <picture>
                            <svg className=' w-[60px] fill-[var(--color-darkblue)]' viewBox="0 0 120.622 110">
                            <defs>
                                <clipPath >
                                <rect/>
                                </clipPath>
                            </defs>
                            <g>
                                <g clip-path="url(#clip-path)">
                                <path d="M80.134,110H40.488a20.666,20.666,0,0,1-17.9-10.333L2.769,65.332a20.663,20.663,0,0,1,0-20.666L22.591,10.333A20.666,20.666,0,0,1,40.488,0H80.134a20.664,20.664,0,0,1,17.9,10.333l19.824,34.333a20.671,20.671,0,0,1,0,20.666L98.031,99.667A20.664,20.664,0,0,1,80.134,110" />
                                </g>
                            </g>
                            </svg>
                        </picture>
                        </div>
                        <div className="activities__text-container">
                            <h4>Manejo de emociones</h4>
                            {/* <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p> */}
                        </div>
                    </div>

                </div>
            </div>
            <div className="coverpage__container flex align-items flex-columns-to-rows-reverse left-flex-xs gap-4 even-flex  position-rel zindex-1">
                <div className="coverpage__text-container">
                    <h3>Vive la experiencia <span className='joy'><i>J</i><i>O</i><i>Y</i></span></h3>
                    <p>Donde compartiremos los valores que permiten en familia el desarrollo constante en los niños. De una manera divertida y estimulante obtendrán la seguridad necesaria en cada paso que den.</p>
                    <Link to={'/themes'} className="call-to-action solid blue">Aprende más</Link>
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
                            <p className="absolute p-4 inset-x-0 bottom-0 h-[120px] z-[2] text-white font-semibold text-2xl text-center align-middle ">{s.title} </p>
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
