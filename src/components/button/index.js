import React from 'react'

export const StandardButton = (props) =>{
  const {children, className, disabled, onClick, type} = props
  return(
    <button type={type} className={`${className} rounded-md ${disabled?"bg-app-yellow-light text-gray-300":"bg-app-primary-100 text-white"} py-1 px-2.5 h-max`} disabled={disabled && true} onClick={onClick}>{children}</button>
  )
}
