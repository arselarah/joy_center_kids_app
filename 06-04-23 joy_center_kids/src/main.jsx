import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { Themes } from './components/Themes'
// import { Programs } from './components/Programs'
// import { Contact } from './components/Contact'

// const router = createBrowserRouter([
//   { 
//     path: '/',
//     element: <App />
//   },
//   { 
//     path: '/themes',
//     element: <Themes />
//   },
//   { 
//     path: '/programs',
//     element: <Programs />
//   },
//   { 
//     path: '/contact',
//     element: <Contact />
//   },
// ]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
