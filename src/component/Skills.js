import React from 'react'
import { Link } from 'react-router-dom'
export default function Skills() {
  return (
    <>
    
    <div class="w-container">
            <h4 class="h3">My Skills</h4>
            <p>
                <table class="table">
                    <tr class="my-skills"> 
                        <th> HTML</th>
                        <th> CSS </th>
                        <th> JavaScript</th>
                    </tr>
                    <tr class="my-skills"> 
                        <th> MongoDB</th>
                        <th> Express </th>
                        <th> React </th>
                        <th> Node </th>
                    </tr>
                </table>
            </p>
            
        </div>
       

        <Link to="/">Home</Link>
     

    </>
  )
}
