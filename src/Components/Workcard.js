import './Workcardstyles.css';

import React from 'react'

const Workcard = (props) => {
  return (
    <div className='project-card'>
      <div className='projectimage-container'>
        <img src={props.imgsrc} alt='image1'/>
      </div>
        <div className='project-title'>
              <h3>{props.title}</h3>
        </div>
      <div className='project-btns'>
          <a href={props.view} className='btn' target="_blank" rel="noreferrer">View</a>
      </div>
    </div>
    
  )
}

export default Workcard