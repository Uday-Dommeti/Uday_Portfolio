import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Navbar from './components/navbar'
import About from './About'
import { Outlet } from 'react-router-dom'
import Projects from './Projects'
import Contact from './Contactme'
import Footer from './Footer'

function App() {

  return (
    <div className='d-flex flex-column align-items-center'>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
