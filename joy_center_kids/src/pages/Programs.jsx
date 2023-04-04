import React from 'react'
import { motion as m } from 'framer-motion'
import image_1 from '../assets/images/pexels-naomi-shi-1001914.jpg'
import image_2 from '../assets/images/pexels-pavel-danilyuk-8422262.jpg'
import image_3 from '../assets/images/pexels-ksenia-chernaya-8537193.jpg'
import image_4 from '../assets/images/pexels-porapak-apichodilok-346779.jpg'
import image_5 from '../assets/images/pexels-artem-podrez-6941689.jpg'

export const Programs = () => {
  return (
    <>
    <m.div className="hero inner-page"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <div className="centered">
            <div className="hero__text-container">
              <h1>Programas</h1>
              <h2>¿Quieres conocer nuestros programas de trabajo?</h2>
              
            </div>
        </div>
    </m.div>
    <m.section className="section-page xl-vertical-padding"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
      <div className='centered side-padding'>
        <div className="section-box large-gap flex">
          <div className='flex flex-columns-rows flex-wrap'>
            <div className="coverpage__text-container">
                <div className="image">
                  <img src={image_1} />
                </div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p>Donec magna odio, dictum nec commodo in, lacinia non massa. Nam bibendum ante finibus nunc ultrices ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nulla enim, ultricies et sapien quis, blandit vestibulum dolor.</p>
                <a className="call-to-action solid orange">Aprende más</a>
            </div>
            <div className="coverpage__text-container">
              <div className="image">
                <img src={image_2} />
               </div>
               <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>Donec magna odio, dictum nec commodo in, lacinia non massa. Nam bibendum ante finibus nunc ultrices ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nulla enim, ultricies et sapien quis, blandit vestibulum dolor.</p>
              <a className="call-to-action solid orange">Aprende más</a>
            </div>

         
            <div className="coverpage__text-container">
                <div className="image">
                  <img src={image_3} />
                </div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p>Donec magna odio, dictum nec commodo in, lacinia non massa. Nam bibendum ante finibus nunc ultrices ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nulla enim, ultricies et sapien quis, blandit vestibulum dolor.</p>
                <a className="call-to-action solid orange">Aprende más</a>
            </div>
            <div className="coverpage__text-container">
              <div className="image">
                <img src={image_4} />
               </div>
               <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>Donec magna odio, dictum nec commodo in, lacinia non massa. Nam bibendum ante finibus nunc ultrices ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nulla enim, ultricies et sapien quis, blandit vestibulum dolor.</p>
              <a className="call-to-action solid orange">Aprende más</a>
            </div>

            <div className="coverpage__text-container">
              <div className="image">
                <img src={image_5} />
               </div>
               <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>Donec magna odio, dictum nec commodo in, lacinia non massa. Nam bibendum ante finibus nunc ultrices ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer nulla enim, ultricies et sapien quis, blandit vestibulum dolor.</p>
              <a className="call-to-action solid orange">Aprende más</a>
            </div>

          </div>
        </div>
      </div>
    </m.section>
    <section className="section-page">
      <div className="centered side-padding">
        {/* <div className="coverpage__text-container center-text large">
          <h4>JOY center KIDS</h4>
          <h3>Nunc fringilla ex ligula, vel tempor ligula ultrices non</h3>
          <p>Nulla eu venenatis lectus. Nullam et nisl lacus. Aenean quis volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur eleifend est ut justo pretium sagittis. Mauris luctus pellentesque ex ac scelerisque. Nunc et neque vestibulum, molestie orci at, feugiat massa. </p>
        </div> */}
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
