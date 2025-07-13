// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' 

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';   
import './assets/css/style.scss';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import Home from './components/frontend/home'; 
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import ContactUs from './components/frontend/ContactUs';

function App() { 

  return (
    <>
         <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/blogs' element={<Blogs/>} />
            <Route path='/contact' element={<ContactUs/>} />
          </Routes>
         </BrowserRouter>
    </>
  )
}

export default App
