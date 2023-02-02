import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
   
    <section className="my-section">
        <h1 className='project'> Projects </h1> <br /> <br />
        eslint-disable-next-line 
        <a href="https://vandu1979.github.io/-matching-memory-game/" target='_blank'  rel="noreferrer">Memory Game</a> <br /> <br />
        <a href="https://vandu1979.github.io/SpaceShip-Battle/SpaceShip-Battle/" target='_blank'  rel="noreferrer">SpaceShip-Battle</a> <br /> <br />
        <a href="https://memory-client-xhdb.onrender.com/" target='_blank'  rel="noreferrer">Memory-Card MERN Full Stack App</a> <br /> <br />
        <a href="https://mern-frontend-kxrn.onrender.com" target='_blank'  rel="noreferrer">Check-In-Register</a> <br /> <br />
        <a href="https://pokemon-app-7012.onrender.com/pokemon" target='_blank'  rel="noreferrer">Pokemon-App</a> <br /> <br />
        
       
        <Link to="/">Home</Link>
   
      </section>

    </>
  )
}
