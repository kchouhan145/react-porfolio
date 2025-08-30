import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/skills', label: 'Skills' },
    { to: '/experience', label: 'Experience' },
    { to: '/project', label: 'Projects' },
    { to: '/education', label: 'Education' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="w-full flex justify-center mt-2">
      <div className="bg-white rounded-2xl shadow-md px-3 md:px-6 flex items-center w-fit relative transition-all duration-200 dark:bg-gray-800 dark:text-white">
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-6 items-center text-base py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `m-2 hover:text-green-600 font-medium transition-colors duration-200 ${isActive ? 'text-green-500' : ''}`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center py-2">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 dark:text-white hover:text-green-600 transition-colors duration-200 p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <button 
          className='ml-3 rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200'
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode">
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path stroke="currentColor" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.46 6.46L5.05 5.05m13.9 0l-1.41 1.41M6.46 17.54l-1.41 1.41"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 md:hidden z-50">
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-600 font-medium transition-colors duration-200 ${
                      isActive ? 'text-green-500 bg-green-50 dark:bg-green-900/20' : ''
                    }`
                  }
                  to={item.to}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
