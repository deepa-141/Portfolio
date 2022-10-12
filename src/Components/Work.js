import './Workcardstyles.css';
import Workcard from './Workcard'
import WorkcardData from './WorkcardData'

import React from 'react'

const Work = () => {
  return (
    <div className='work-container'>
     
       <div className='project-container'>
          {WorkcardData.map((val,ind)=>{
            return(
              <Workcard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
             
              view={val.view}
              />
            )
          })}
       </div>
    </div>
  )
}

export default Work