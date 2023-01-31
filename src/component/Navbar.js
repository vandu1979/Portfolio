import React, { useState } from 'react'
// import './styles.css'
import { FaLinkedin, FaGithub, FaEnvelope   } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from "react-router-dom";
import resume from '../pdf/resume.pdf'

export default function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
   <>
      <nav className="main-nav">
        {/* first my name logo */}
        <div className='logo'>
          <h2>
           Vandana Kothari
          </h2>
        </div>
         {/* 2nd menu part */}
        
        <div className= { showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link' }>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About Me</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li> 
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to={resume} target='_blank'>Resume</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        </div>
        {/* social media link */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.linkedin.com/in/vandanakothari/"
                target="_kothari">
                <FaLinkedin className="linkedin" />
              </a>
            </li>
        
             <li>
              <a
            
                href="https://github.com/vandu1979"
                target="_kothari">
                <FaGithub className="github" />
              </a>
            </li> 
            {/* <li>
              <a
             href='vandana_' 
             target="_kothari">
               <FaEnvelope className='email' />
             </a>
            </li> */}
          </ul>

          {/* hamburger menu start */}
          <div className="hamburger-menu">
          {/* eslint-disable-next-line  */}
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
        {/* <section className="my-section">
        <p> Welcome to my page </p>
      
      </section> */}

      </> 
    
    
  )
}
