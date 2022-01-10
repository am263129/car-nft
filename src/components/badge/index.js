import React from 'react';
import roundedCloseIcon from '../../assets/icons/ic_rounded_close.svg';
import roundedDarkIcon from '../../assets/icons/ic_rounded_dark_close.svg';
export const BadgeButton = (props) => {
  const { clear, count, className } = props
  const handleClear = (e) =>{
    e.stopPropagation();
    clear()
  }
  return (
    <div className={`rounded-full h-5.5 px-2 bg-app-primary-100 text-white flex items-center gap-1 ${className}`}>
      <span className='text-sm'>{count}</span>
      <div onClick={handleClear}>
        <img src={roundedCloseIcon} alt='close' />
      </div>
    </div>
  )
}

export const FilterBadge = (props) =>{
  const { children, className, remove } = props
  const handleClear = (e) =>{
    e.stopPropagation();
    remove()
  }
  return (
    <div className={`rounded-full h-7 px-2 border border-app-gray-400 text-black bg-white flex items-center gap-1 ${className}`}>
      <span className='text-sm'>{children}</span>
      <div onClick={handleClear}>
        <img src={roundedDarkIcon} alt='close' />
      </div>
    </div>
  )
}