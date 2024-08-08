import React from 'react'

const OpenCloseBtn = ({toggle,setToggle,icon,className}) => {
    
  return (
 
    <button
        className={`block md:hidden font-medium text-2xl cursor-pointer text-white ${className&&className}`}
        onClick={() => setToggle(!toggle)}
      >
        {icon}
      </button>
  )
}


export default OpenCloseBtn