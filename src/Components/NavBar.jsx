import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);
  
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark((prev) => !prev);
  };
  return (
    <nav className="w-full flex justify-center mt-2">
      <div className="bg-white rounded-2xl shadow-md px-3 md:px-6 flex items-center w-fit relative transition-all duration-200 dark:bg-gray-800 dark:text-white">
        <div className="flex flex-row flex-wrap gap-2 md:gap-6 items-center text-sm md:text-base">
          <NavLink
            className={({ isActive }) =>
              `m-1 md:m-2 hover:text-green-600 font-medium ${isActive ? 'text-green-500' : ''}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink className={({isActive}) => `m-1 md:m-2 hover:text-green-600 font-medium ${isActive ? 'text-green-500': '' }`} to="/skills" >Skills</NavLink>
          <NavLink className={({isActive}) => `m-1 md:m-2 hover:text-green-600 font-medium ${isActive ? 'text-green-500': '' }`} to="/project">Projects</NavLink>
          <NavLink className={({isActive}) => `m-1 md:m-2 hover:text-green-600 font-medium ${isActive ? 'text-green-500': '' }`} to="/education">Education</NavLink>
          <NavLink className={({isActive}) => `m-1 md:m-2 hover:text-green-600 font-medium ${isActive ? 'text-green-500': '' }`} to="/contact">Contact</NavLink>
        </div>
        <button className='ml-3 rounded-xl p-2'
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode">
          {isDark ? (
            // Sun icon for light mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path stroke="currentColor" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.46 6.46L5.05 5.05m13.9 0l-1.41 1.41M6.46 17.54l-1.41 1.41"/>
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}

export default NavBar