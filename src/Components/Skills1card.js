import './Skills1cardstyles.css'
import React from 'react'
import Pro4 from '../assets/Project4.jpg'

const Skills1card = () => {
  return (
    <div className='work-container'>
       <h1 className='skills-heading'>Skills</h1>
       <div className='skills-container'>
        <div className='skills-card'>
          <div className='image-container'>
            <img src={Pro4} alt='image1'/>
          </div>
          <div className='card-content'>
            <div className='card-title'>
              <h3>title</h3>
            </div>
            <div className='card-body'>
               <p>This is content</p>
            </div>
          </div>
         
        </div>
       </div>

       
    </div>
  )
}

export default Skills1card