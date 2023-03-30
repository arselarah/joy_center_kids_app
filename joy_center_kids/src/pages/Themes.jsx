import React from 'react'
import { motion as m } from 'framer-motion'
import image_1 from '../assets/images/pexels-naomi-shi-1001914.jpg'
import image_2 from '../assets/images/pexels-pavel-danilyuk-8422262.jpg'

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
              <h2>Hablemos de los temas que tratamos</h2>
              
            </div>
        </div>
    </m.div>
    <m.section className="section-page colored-cage"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
      <div className='centered'>
        <div className="blue-cage section-box flex">
          <div className='flex'>
          <div className="coverpage__text-container">
             <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>Donec magna odio, dictum nec commodo in, lacinia non massa. Nam bibendum ante finibus nunc ultrices ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nulla enim, ultricies et sapien quis, blandit vestibulum dolor.</p>
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
                <img src={image_2} />
               </div>
            </div>
            <div className="coverpage__text-container">
             <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>Donec magna odio, dictum nec commodo in, lacinia non massa. Nam bibendum ante finibus nunc ultrices ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nulla enim, ultricies et sapien quis, blandit vestibulum dolor.</p>
              <a className="call-to-action solid orange">Aprende más</a>
            </div>
          </div>
        </div>
      </div>
    </m.section>
    <section className="section-page">
      <div className="centered">
        <div className="coverpage__text-container center-text large">
          <h4>JOY center KIDS</h4>
          <h3>Nunc fringilla ex ligula, vel tempor ligula ultrices non</h3>
          <p>Nulla eu venenatis lectus. Nullam et nisl lacus. Aenean quis volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eleifend est ut justo pretium sagittis. Mauris luctus pellentesque ex ac scelerisque. Nunc et neque vestibulum, molestie orci at, feugiat massa. </p>
        </div>
        <div className='coverpage__activities-container flex'>
          <div className='activities__text-container center-text'>
            <h4>Morbi sit amet sapien ut ipsum euismod lobortis</h4>
          </div>
          <div className='activities__text-container center-text'>
            <h4> Nunc et neque vestibulum, molestie orci at, feugiat massa. </h4>
          </div>
          <div className='activities__text-container center-text'>
            <h4>Curabitur eleifend est ut justo pretium sagittis</h4>
          </div>
        <a className="call-to-action solid blue centered-button">Aprende más</a>
        </div>
      </div>
    </section>
</>
  )
}
