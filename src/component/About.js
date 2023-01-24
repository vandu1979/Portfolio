import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
    <div id="section-about" class="section-content">
        <div class="section-header w-container">
            <div class="div-header">
                <div class="header-column w-row">
                    <div class="column-title w-col">
                        <h1 class="h2">About</h1>
                       
                    </div>
                </div>
            </div>
        </div>
    
    <div class="section-text w-container">
    <p class="body-p">
        I am a full stack software developer with MERN stack skills with Per Scholas. I am good at team work 
                                                                    
    </p>   
</div>
</div>
<Link to="/">Home</Link>
</>
  )
}
