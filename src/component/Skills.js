import React from 'react'
import { Link } from 'react-router-dom'
export default function Skills() {
  return (
    <>
    
    <div className="w-container">
            <h4 className="h3 pageTitle">My Skills</h4>
            <p className='skillContainer'>
                <table className="table">
                    <tr className="my-skills"> 
                        <th> HTML</th>
                        <th> CSS </th>
                        <th> JavaScript</th>
                    </tr>
                    <tr className="my-skills"> 
                        <th> MongoDB</th>
                        <th> Express </th>
                        <th> React </th>
                        <th> Node </th>
                    </tr>
                </table>
            </p>
            
        </div>
       

        {/* <Link to="/">Home</Link> */}
     

    </>
  )
}
