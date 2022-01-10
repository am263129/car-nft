import React, { useState } from 'react'
import Expand from 'react-expand-animated';
import upIcon from '../../assets/icons/ic_up.svg';
import downIcon from '../../assets/icons/ic_down.svg';

const Accordion = (props) => {
  
  const { children, summary, className, subClassname, expand, setExpand } = props
  return (
    <div className={`${className} px-4 items-center`}>
      <div className={`flex justify-between items-center ${subClassname}`} onClick={()=>{setExpand(!expand)}}>
        <div className='w-10/12'>{summary}</div>
        <img src={downIcon} alt='expand' className={`transform ${expand?"rotate-180":"rotate-0"} duration-300 flex-shrink-0`}/>
      </div>
      <Expand open={expand}>
        {children}
      </Expand>
    </div>
  )
}

export default Accordion