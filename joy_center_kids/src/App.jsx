import { useState } from 'react'
import './index.css'
import { NavBar } from './components/NavBar'
import { HeroPage } from './components/HeroPage'
import { IndexPage } from './components/IndexPage'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <HeroPage />
      <IndexPage />
      <Footer />
    </div>
  )
}

export default App
