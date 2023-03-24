import { useState } from 'react'
import './index.css'
import { NavBar } from './components/NavBar'
import { HeroPage } from './components/HeroPage'
import { IndexPage } from './components/IndexPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <HeroPage />
      <IndexPage />
    </div>
  )
}

export default App
