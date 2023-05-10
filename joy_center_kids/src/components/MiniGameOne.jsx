import React from 'react'
import { useState } from 'react'
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
import video_1 from '../assets/videos/rotacion.mp4'
import medal from '../assets/images/medalla.png'
import Confetti from 'react-confetti'

export const MiniGameOne = () => {

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showBadge, setShowBadge] = useState(false)
    const questions = [

        {
            text: "¿Cómo se llama el movimiento que hace la tierra sobre su propio eje?",
            options: [
                {id: 0, text: "Orbitar", isCorrect: false},
                {id: 1, text: "Traslación", isCorrect: false},
                {id: 2, text: "Rotación", isCorrect: true},
                {id: 3, text: "Rectilíneo", isCorrect: false},
            ],
        },
        {
            text: "¿Cuánto tiempo le toma al Planeta Tierra girar sobre su propio eje?",
            options: [
                {id: 0, text: "12 meses", isCorrect: false},
                {id: 1, text: "1 día", isCorrect: true},
                {id: 2, text: "1 semana", isCorrect: false},
                {id: 3, text: "1 mes", isCorrect: false},
            ],
        },
        {
            text: "¿Por qué se dan las estaciones del año?",
            options: [
                {id: 0, text: "Por la inclinación en el eje de la tierra además del movimiento de traslación", isCorrect: true},
                {id: 1, text: "Por el movimiento del sol en la órbita", isCorrect: true},
                {id: 2, text: "Por la inclinación en el eje de la tierra además del movimiento de rotación", isCorrect: false},
                {id: 3, text: "Por la traslación del sol", isCorrect: false},
            ],
        },
        {
            text: "¿Cuánto tiempo le toma a la Tierra dar una vuelta al  Sol?",
            options: [
                {id: 0, text: "2 semanas", isCorrect: false},
                {id: 1, text: "1 día", isCorrect: false},
                {id: 2, text: "30 años", isCorrect: false},
                {id: 3, text: "1 año", isCorrect: true},
            ],
        },
        {
            text: "¿Cuántas estaciones tenemos en un año?",
            options: [
                {id: 0, text: "Tres", isCorrect: false},
                {id: 1, text: "Cuatro", isCorrect: true},
                {id: 2, text: "Cinco", isCorrect: false},
                {id: 3, text: "Seis", isCorrect: false},
            ],
        },
        {
            text: "¿Qué movimiento de la Tierra produce el día y la noche?",
            options: [
                {id: 0, text: "Rotación", isCorrect: true},
                {id: 1, text: "Traslación", isCorrect: false},
                {id: 2, text: "Orbitar", isCorrect: false},
                {id: 3, text: "Rectilíneo", isCorrect: false},
            ],
        },
        
    ]

    const optionClicked = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1);
        }

        if(currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            
        } else {
            setFinalResults(true);
            console.log(score + 1)
        }

        if(score + 1 == 6) {
            setShowBadge(true);
        }

    }


    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
        setShowBadge(false);
    }
 

  return (
    <>
    <m.div className="hero inner-page"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <div className="centered side-padding">
            <div className="hero__text-container z-[1]">
              <h1 className='text-[var(--color-button-one)]'>Misión 6 a 9 años</h1>
              <h2>Un asteroide impactará la tierra ¡ayúdanos!</h2>
              
            </div>
            <div className="pattern bluish"></div>
            <div className="pattern footer righty"></div>
        </div>
    </m.div>
 
    <m.section className="section-page themes overflow-hide xl-vertical-padding"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
    
      <div className="centered side-padding">
      <div className="pattern footer top"></div>
      <div className=" section-box flex flex-columns-rows nowrap gap-4 even-flex">
          <div className='flex flex-columns gap-4 zindex-1 green-bg padding-2 border-radius colored-cage'>
          <div className="coverpage__text-container">
             <h3>Un asteroide impactará la tierra</h3>
             <p>Un asteroide impactará la tierra y necesitamos tu ayuda para evitarlo. En el siguiente video te explicamos como podríamos hacerlo.</p>
          </div>
            <div className="coverpage__image-container">
              <video src={video_1} controls></video>
            </div>

          </div>
          <div className='flex flex-columns even-flex gap-4 position-rel zindex-1 blue-bg padding-2 border-radius colored-cage'>
            
            <div className="coverpage__text-container flex justify-center flex-col">

                {showFinalResults ?
                <div className="final-result yellow-bg py-[2rem] pt-[2rem] pb-[4rem] border-radius">
                    <h3 className='text-center'>Resultado:</h3>
                    <p className='text-center'>{score} de {questions.length} correctas ({Math.round((score/questions.length) * 100)}% de respuestas correctas)</p>            
                    <button onClick={() => restartGame()} className='call-to-action solid blue mx-[auto]'>Reiniciar misión</button>
                    {showBadge ?
                    <div className="badge flex flex-col justify-center items-center">
                        <div className="badge__container blue-bg border-radius p-[2rem]">
                            <h3 className='text-center'>¡Felicidades!</h3>
                            <p>Ganaste tu insignia JOY center Kids por haber salvado el planeta</p>
                            <div className="medal">
                                <img src={medal} alt="Medalla JOY" />
                            </div>
                            <button onClick={() => restartGame()} className='call-to-action solid orange mx-[auto]'>Salir</button>
                        </div>
                        <Confetti />
                    </div>
                    
                    :
                    
                    <h3 className='text-center'>Intenta nuevamente</h3>
                    }
                </div>

                :

                <div className="question-card">
                    <h3 className='text-center'>Pregunta {currentQuestion + 1} de {questions.length}</h3>
                    <p className='text-center questions'>{questions[currentQuestion].text}</p>

                    <ul className='question-list flex flex-col items-center'>
                        {questions[currentQuestion].options.map((option) => {
                            return(
                                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                            );
                        })}
                    </ul>

                    <p className='text-center questions'>Puntuación: {score}</p>

                </div>
                
                }
            </div>
          </div>
        </div>
        
      </div>
    </m.section>
    


    </>
  )
}
