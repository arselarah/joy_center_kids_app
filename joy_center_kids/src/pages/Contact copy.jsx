import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { useFormik } from 'formik'
import * as Yup from 'yup';

export const Contact = () => {
  //Formik Logics
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      terms: "",
    },
    //console.log(formik.values);

    // Validate Form
    validationSchema: Yup.object({
      name: Yup.string().max(40, "El nombre solo puede incluir 40 caracteres o menos.").required("Es necesario que teclees tu nombre"),
      phone: Yup.string().max(10, "El número de teléfono debe contener 10 dígitos, incluyendo la clave LADA").required("Es necesario que teclees tu número de teléfono"),
      email: Yup.string().email("Dirección de correo incorrecta").required("Es necesario que teclees tu email"),
      terms: Yup.array().required("Debes aceptar los términos y condiciones de nuestra política de manejo de datos personales"),
    }),

  //Submit Form
    

    // onSubmit: (values) => {
    //   console.log(values);
      
    // },
  });
  

  //console.log(formik.errors);

  return (
    <>
    <m.div className="hero inner-page"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
        <div className="centered">
            <div className="hero__text-container">
              <h1 className='text-[var(--color-yellow)]'>Contacto</h1>
              <h2>Ponte en contacto con JOY</h2>
              
            </div>
        </div>
    </m.div>

    <m.section className="section-page form xl-vertical-padding"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: .25, duration: .5, ease: 'linear' }}
    >
      <div className="centered side-padding">
        <div className="section-box flex flex-columns-rows even-flex colored-cage green-bg no-padding no-gap">
          <div className="form__content image-bg flex flex-columns space-between">
            <div className='padding-bottom-4'>
             <span>Email</span>
             <a>hola@joycenterkids.com</a>
             <span>Teléfono</span>
             <a>871 256 8923</a>
            </div>
            <div>
              <p className='xs-text'>By submitting this form, I acknowledge receipt of the Privacy Policy.</p>
              <p className='xs-text'>The controller of your personal data is, a company established under the laws of Estonia. Your personal data provided by you in the registration form above will be used for the purpose of sending you an email with instructions on how to set up your account on the Platform. The legal basis of processing your personal data is the fulfilment of contract with the controller. For more information about the processing of your personal data, including your rights, please refer to the Privacy Policy.</p>
            </div>
          </div>
          <div className="form__content">
            <form
            onSubmit={formik.handleSubmit}
            >
              <div className='form__content flex flex-columns'>
                <h3>Envíanos un mensaje</h3>
                  <div>
                    <label
                    className={`${formik.touched.name && formik.errors.name ? "label-orange font-bold" : ""}`}
                    htmlFor="name"
                    >
                      {formik.touched.name && formik.errors.name ? formik.errors.name : "Nombre"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder='Tu nombre'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                  </div>
                  <div>
                    <label className={`${formik.touched.phone && formik.errors.phone ? "label-orange font-bold" : ""}`} htmlFor="phone">{formik.touched.phone && formik.errors.phone ? formik.errors.phone : "Teléfono"}</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder='Tu número de teléfono'
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                  </div>
                  <div>
                    <label htmlFor="email"
                    className={`${formik.touched.email && formik.errors.email ? "label-orange font-bold" : ""}`}
                    >
                    {formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder='Tu email'
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                  </div>
                  <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      >
                        
                      </textarea>
                  </div>
                  <div className='py-[1rem]'>
                    <label htmlFor="terms" className={`${formik.touched.terms && formik.errors.terms ? "label-orange font-bold" : ""}`}>{formik.touched.terms && formik.errors.terms ? formik.errors.terms : " Acepta los términos y condiciones "}</label>
                    <div className='flex flex-rows pb-[1rem]'>
                      <input
                        type="checkbox"
                        name="terms"
                        value="checked"
                        onChange={formik.handleChange}
                        />
                      <p className='xs-text pl-[0.5rem]'>Acepto los términos y condiciones descritos en las políticas de privacidad</p>
                    </div>
                  </div>
                  <button className='call-to-action solid orange' type='submit'>Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </m.section>
    </>
  )
}
