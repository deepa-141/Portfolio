import './Myskillscardstyles.css';

import React from 'react'

const Myskillscard = (props) => {
  return (
    <div className='skills-card'>
          <div className='image-container'>
            <img src={props.imgsrc} alt='image1'/>
          </div>
          
    </div>
  )
}

export default Myskillscard