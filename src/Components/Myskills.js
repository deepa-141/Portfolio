import './Myskillscardstyles.css';
import Myskillscard from './Myskillscard'
import MyskillscardData from './MyskillscardData'

import React from 'react'

const Myskills = () => {
  return (
    <div className='myskills-container'>
      
       <div className='skills-container'>
          {MyskillscardData.map((val,ind)=>{
            return(
              <Myskillscard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              />
            )
          })}
       </div>
    </div>
  )
}

export default Myskills