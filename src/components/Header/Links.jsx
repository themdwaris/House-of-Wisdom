import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = ({path,name,toggle,setToggle}) => {
  return (
    <>
     <NavLink to={path} className={({isActive})=>` text-[18px] font-semibold dark:text-white text-gray-700 ${isActive?"text-white font-bold":"text-white/80"} `} onClick={()=>{
      setToggle(!toggle)
     }}>{name}</NavLink>
    </>
  )
}

export default Links