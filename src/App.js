
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Typography,  AppBar } from '@material-ui/core';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Skills from './component/Skills';
import Projects from './component/Projects';
import About from './component/About';
import Contact from './component/Contact';


// import './styles.css'

function App() {
  return (
   <>
  <Navbar />

  
  
   <Routes>
  
          <Route exact path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
    
  
    </Routes>
   
    </>
    
    
  );
}

export default App;
