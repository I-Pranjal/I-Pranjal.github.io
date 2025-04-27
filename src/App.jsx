import './App.css'
import * as motion from "motion/react-client"
import React from 'react'
import Navbar from './components/navbar'
import Hero from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/project'
import Contact from './pages/contact'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
    
  )
}



export default App
