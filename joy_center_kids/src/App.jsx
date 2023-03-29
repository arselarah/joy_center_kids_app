import { useState } from 'react'
import './index.css'
import { NavBar } from './components/NavBar'
import { IndexPage } from './components/IndexPage'
import { Footer } from './components/Footer'
import { Themes } from './components/Themes'
import { Programs } from './components/Programs'
import { Contact } from './components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <IndexPage />
  },
  { 
    path: '/themes',
    element: <Themes />
  },
  { 
    path: '/programs',
    element: <Programs />
  },
  { 
    path: '/contact',
    element: <Contact />
  },
]); 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
