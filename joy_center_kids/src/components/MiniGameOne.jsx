import React from 'react'
import { useState } from 'react'
import { motion as m } from 'framer-motion'
import { Link } from 'react-router-dom'
// import video_1 from '../assets/videos/rotacion.mp4'
import medal from '../assets/images/medalla.png'
import Confetti from 'react-confetti'

export const MiniGameOne = () => {

    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showBadge, setShowBadge] = useState(false)
    //const [finalScore, setFinalScore] = useState(0)
    //const [finalScore, setFinalScore] = useState(0)
    const questions = [

        {
            text: "¿Cómo se llama el movimiento que tiene la tierra sobre su propio eje, el cual es responsable del día y la noche?",
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
                {id: 1, text: "24 horas", isCorrect: true},
                {id: 2, text: "1 semana", isCorrect: false},
                {id: 3, text: "1 mes", isCorrect: false},
            ],
        },
        {
            text: "¿Cómo se le llama al movimiento en que la Tierra gira al rededor del sol?",
            options: [
                {id: 0, text: "Rotación", isCorrect: false},
                {id: 1, text: "Traslación", isCorrect: true},
                {id: 2, text: "Orbitar", isCorrect: false},
                {id: 3, text: "Rectilíneo", isCorrect: false},
            ],
        },
        {
            text: "¿Cuánto tiempo le toma a la Tierra dar una vuelta al Sol?",
            options: [
                {id: 0, text: "2 semanas", isCorrect: false},
                {id: 1, text: "1 día", isCorrect: false},
                {id: 2, text: "24 meses", isCorrect: false},
                {id: 3, text: "1 año", isCorrect: true},
            ],
        },
        {
            text: "¿Por qué se dan las estaciones del año (primavera, verano, otoño e invierno)?",
            options: [
                {id: 0, text: "Por la inclinación en el eje de la tierra combinado con el movimiento de traslación", isCorrect: true},
                {id: 1, text: "Por el movimiento del sol en la órbita", isCorrect: false},
                {id: 2, text: "Por la inclinación en el eje de la tierra además del movimiento de rotación", isCorrect: false},
                {id: 3, text: "Por la traslación del sol", isCorrect: false},
            ],
        },
        {
            text: "¿Cuántos días tiene un año bisiesto?",
            options: [
                {id: 0, text: "Quinientos", isCorrect: false},
                {id: 1, text: "366", isCorrect: true},
                {id: 2, text: "12 meses", isCorrect: false},
                {id: 3, text: "365", isCorrect: false},
            ],
        },
        
    ]

    const optionClicked = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1);
            if(score + 1 === questions.length){
                console.log('La suma es:', score + 1);
                setShowBadge(true);
            }
        }

        if(currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            
        } else {
            setFinalResults(true);
           
        }
        // if(finalScore == questions.length) {
        //         console.log('questions',  finalScore);
        //         setShowBadge(true);
        //     }

    }


    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
        setShowBadge(false);
        document.querySelector('.game').classList.add('hide-game');
    }

    //const gameBox = document.querySelectorAll('.game');
    const showGame = () => {
        //console.log('Mostar juego');
        document.querySelector('.game').classList.remove('hide-game');
        document.querySelector(".opacidad").style.opacity = "1";
        document.getElementById("mini-game").scrollIntoView({ behavior: 'smooth', block: 'end'});

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
              <h2>¿Te has preguntado por qué existen el día y la noche?</h2>
              
            </div>
            <div className="pattern bluish"></div>
            <div className="pattern footer righty"></div>
        </div>
    </m.div>

    <m.section className="section-page themes xl-vertical-padding"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
      <div className='centered side-padding'>
        <div className="blue-bg section-box flex colored-cage side-padding vertical-padding position-rel overflow-hide flex-columns-rows wrap gap-4">
        <div className="pattern bluish"></div>
          <div className='flex align-items flex-columns-rows even-flex gap-4 zindex-1'>
          <div className="coverpage__text-container ">
            <h3 className='xl-word'>¿Te has preguntado por qué existen el día y la noche?</h3>
             <p>Hola amiguitos. Hoy vamos a estudiar los movimientos de rotación y traslación del planeta tierra para ¿Me acompañas? ¿Sabes algo sobre el movimiento de rotación y traslación del planeta tierra? ¿No? Bueno, repasemos juntos:</p>
             <button className='call-to-action solid orange' onClick={showGame}>Jugar</button>
          </div>
          <div className="coverpage__image-container">
              {/* <video src={video_1} controls></video> */}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/why7rP49sPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
         
        </div>
        
      </div>
    </m.section>
    <section id="mini-game" className="section-page themes xl-vertical-padding game hide-game">
      <div className="centered side-padding">
      <div className=" section-box flex colored-cage green-bg side-padding vertical-padding overflow-hide position-rel opacidad">
      <div className="pattern bluish"></div>
          <div className='flex align-items flex-columns-rows even-flex gap-4 position-rel zindex-1'>
          <div className="coverpage__text-container">
             <h3>Responde las siguientes preguntas</h3>
             <p>Ayúdanos a salvar al planeta Tierra contestando estas preguntas.</p>
          </div>
          <div className="coverpage__text-container flex justify-center flex-col">

{showFinalResults ?
<m.div className="final-result yellow-bg py-[2rem] px-[2rem] pb-[4rem] border-radius"
initial={{opacity: 0}}
animate={{opacity: 1}}
transition={{delay: .25, duration: .5, ease: 'linear' }}
>
    <h3 className='text-center'>Resultado:</h3>
    <p className='text-center'>{score} de {questions.length} correctas ({Math.round((score/questions.length) * 100)}% de respuestas correctas)</p>            
    <button onClick={() => restartGame()} className='call-to-action solid blue mx-[auto]'>Reiniciar misión</button>
    {showBadge ?
    <m.div className="badge flex flex-col justify-center items-center"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: .5, ease: 'linear' }}
    >
        <div className="badge__container blue-bg border-radius p-[2rem]">
            <h3 className='text-center'>¡Felicidades!</h3>
            <p>Ganaste tu insignia JOY center Kids por haber salvado el planeta</p>
            <div className="medal">
                <img src={medal} alt="Medalla JOY" />
            </div>
            <button onClick={() => restartGame()} className='call-to-action solid orange mx-[auto]'>Salir</button>
        </div>
        <Confetti />
    </m.div>
    
    :
    
    <h3 className='text-center'>Intenta nuevamente</h3>
    }
</m.div>

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
    </section>

 
    


    </>
  )
}
