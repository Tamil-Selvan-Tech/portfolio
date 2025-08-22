import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Project/>
      <Contact/>
      

    </div>


  )
}

export default App