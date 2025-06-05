import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full flex justify-center mt-2">
      <div className="bg-white rounded-2xl shadow-md px-3 md:px-6 flex items-center w-fit relative transition-all duration-200">
        <div className="flex flex-row flex-wrap gap-2 md:gap-6 items-center text-sm md:text-base">
          <NavLink className="m-1 md:m-2 hover:text-green-500 font-medium" to="/">Home</NavLink>
          <NavLink className="m-1 md:m-2 hover:text-green-500 font-medium" to="/skills" >Skills</NavLink>
          <NavLink className="m-1 md:m-2 hover:text-green-500 font-medium" to="/project">Projects</NavLink>
          <NavLink className="m-1 md:m-2 hover:text-green-500 font-medium" to="/education">Education</NavLink>
          <NavLink className="m-1 md:m-2 hover:text-green-500 font-medium" to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
