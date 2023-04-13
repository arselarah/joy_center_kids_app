import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import { IndexPage } from '../pages/IndexPage'
import { Themes } from '../pages/Themes'
import { Programs } from '../pages/Programs'
import { Contact } from '../pages/Contact'
import { News } from './News'

// const routes = [
//     {path: "/", name: "Inicio", component: IndexPage},
//     {path: "/themes", name: "Temas", component: Themes},
//     {path: "/programs", name: "Programas", component: Programs},
//     {path: "/contact", name: "Contacto", component: Contact},
//     {path: "/news/*", name: "News", component: Contact}
// ];

export const Contents = () => {
  return (
    <>
    <section className="main padding-bottom-4 overflow-x-hidden">
      <div className="triggers"></div>
        <Routes>
        <Route path={"/"} element={<IndexPage />}/>
        <Route path={"/themes"} element={<Themes />}/>
        <Route path={"/programs"} element={<Programs />}/>
        <Route path={"/contact"} element={<Contact />}/>
        <Route path={"/news/*"} element={<News />} />
        </Routes>
    </section>
    </>
  )
}
