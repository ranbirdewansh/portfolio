import { useState } from 'react'

import './styles/Theme.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : 'light'}>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

    </div>
  )
}

export default App