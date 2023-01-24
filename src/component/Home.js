import React from 'react'
import { Link } from 'react-router-dom'
import images from "./images/Vandana Kothari (1) (1).jpg";
export default function Home() {
  return (
    <>
   
    <section className="my-section">
        <div id="section-home" class="section-homepage w-container">
            <div class="profile-image">
                <img src={ images } alt="Vandana's Profile"/>
            </div> 
            <div class="div-text-home">
                <h1>
                <strong class="h1">Hello, I am Vandana</strong>
                </h1>
                <p class="body-home">
                A software developer, seeking to further improve my technical skills and looking forward to getting an opportunity as a full-stack developer to utilize my competencies and experience to serve the company. 
               </p>
            </div>
        </div>
        <Link to="/Contact">Contact</Link>
      </section>

    </>
  )
}

 