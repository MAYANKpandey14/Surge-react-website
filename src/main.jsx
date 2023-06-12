import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Footer from './components/Footer'
import Blurb from './components/Blurb'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <Trust/>
    <Blurb/>
    <Footer/>
  </React.StrictMode>,
)
