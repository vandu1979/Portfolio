import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
   
    <section className="my-section">
        <h1 className='project'> Projects </h1> <br /> <br />
        <a href="https://vandu1979.github.io/-matching-memory-game/" target='_blank'>Memory Game</a> <br /> <br />
        <a href="https://vandu1979.github.io/SpaceShip-Battle/" target='_blank'>SpaceShip-Battle</a> <br /> <br />
        <a href="https://memory-client-xhdb.onrender.com/" target='_blank'>Memory-Card MERN Full Stack App</a> <br /> <br />
      
       
        <Link to="/">Home</Link>
   
      </section>

    </>
  )
}
