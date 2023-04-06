import { useState } from 'react'
import './index.css'
import { NavBar } from './components/NavBar'
// import { IndexPage } from './components/IndexPage'
import { Footer } from './components/Footer'
import { Contents } from './pages/Contents'
import ScrollToTop from './components/ScrollToTop'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <ScrollToTop />
      {/* <IndexPage /> */}
      <Contents />
      <Footer />
    </div>
  )
}

export default App
