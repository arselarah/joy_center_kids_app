import React from 'react'
import image_1 from '../assets/images/pexels-alexander-grey-1148998.jpg'
import image_2 from '../assets/images/pexels-artem-podrez-6941672.jpg'
import { HeroPage } from './HeroPage'

export const IndexPage = () => {
  return (
    <>
    <HeroPage />
    <section className='coverpage blue-bg colored-cage'>
        <div className="centered">
            <div className="coverpage__container flex">
                <div className="coverpage__text-container">
                    <h3>We Are <span className='bluish'>JOY</span> center <span className='yellow'>KIDS</span> And Childhood Is Our Passion</h3>
                    <p>We are excited and pleased to introduce you to the wonderful, passionate and committed educators who are working at Skole Learning Centre. Please take a moment to meet “Our Family!” We invited each of them to describe why they love working with children.</p>
                    <a className="call-to-action solid orange">Aprende más</a>
                </div>
                <div className="coverpage__image-container">
                    <div className="clipped image">
                    <img src={image_1} />
                    </div>
                </div>
            </div>
            <div className="coverpage__container full-width">
                <div className="coverpage__text-container center-text small">
                    <h3>We Meet <span className='yellow'>Kids</span> Where They Are</h3>
                    <p>Dream is often a child’s first introduction to school.</p>
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
    </section>
    <section className='coverpage light-bg'>
        <div className="coverpage__rounded-bar"></div>
        
        <div className="centered">
            <div className="coverpage__container full-width">
                <div className="coverpage__text-container center-text medium">
                    <h3>We Provide Your Child With An Opportunity</h3>
                    <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                </div>
                <div className='coverpage__activities-container flex'>
                    <div>
                        <div className='activities__icon-container'>
                            <div></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Funny games</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div>
                        <div className='activities__icon-container'>
                            <div></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Professional Teachers</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div>
                        <div className='activities__icon-container'>
                            <div></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Education Program</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div>
                        <div className='activities__icon-container'>
                            <div></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>All in One Place Together</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div>
                        <div className='activities__icon-container'>
                            <div></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Easy To Learn</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>
                    <div>
                        <div className='activities__icon-container'>
                        <div></div>
                        </div>
                        <div className="activities__text-container">
                            <h4>Sport Program</h4>
                            <p>We develop a love for learning from an early age. This is an important process that we perform using games.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="coverpage__container flex">
                <div className="coverpage__text-container">
                    <h3>Come Over And Look Around</h3>
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
