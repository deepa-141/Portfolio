import './Institutecardstyles.css';

import React from 'react'

const Institutecard = (props) => {
  return (
<div className='Institute-card'>
    <div className='instituteimage-container'>
        <img src={props.imgsrc} alt='image1'/>
    </div>
    <div className='card-content'>
        <div className='card-title'>
              <h3>{props.title}</h3>
        </div>
        <div className='card-class'>
               <p>{props.class}</p>
        </div>
        <div className='card-grade'>
               <p>{props.grade}</p>
        </div>
    </div>
</div>
  )
}

export default Institutecard