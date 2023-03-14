import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
   
    <section className="my-section">
        {/* <h1 className='project'> Projects </h1> <br /> <br /> */}
     
       <ul>
       <li> <a href="https://vandu1979.github.io/SpaceShip-Battle/SpaceShip-Battle/" target='_blank'  rel="noreferrer">SpaceShip-Battle</a></li> <br /> <br />
       <li> <a href="https://vandu1979.github.io/Matching-Game/" target='_blank'  rel="noreferrer">Matching Game</a> </li> <br /> <br />
       <li> <a href="https://pokemon-app-7012.onrender.com/pokemon" target='_blank'  rel="noreferrer">Pokemon-App</a> </li> <br /> <br />
       <li> <a href="https://memory-client-xhdb.onrender.com/" target='_blank'  rel="noreferrer">Mern Stack Memory-Card-App</a> </li> <br /> <br />
       <li> <a href="https://mern-frontend-kxrn.onrender.com" target='_blank'  rel="noreferrer">Mern Stack Check-In-App</a> </li> <br /> <br />
      </ul> <br /> <br />
        
       
        <Link to="/">Home</Link>
   
      </section>

    </>
  )
}
