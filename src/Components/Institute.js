import './Institutecardstyles.css';
import Institutecard from './Institutecard'
import InstitutecardData from './InstitutecardData'

import React from 'react'

const Institute = () => {
  return (
    <div className='Academics-container'>
    
       <div className='Institute-container'>
          {InstitutecardData.map((val,ind)=>{
            return(
              <Institutecard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              class={val.class}
              grade={val.grade}
              />
            )
          })}
       </div>
    </div>
  )
}

export default Institute;