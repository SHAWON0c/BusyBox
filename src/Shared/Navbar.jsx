import React, { useState } from 'react';

import { Menu } from "lucide-react"

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleBadgeClick = () => {
    setIsActive(!isActive)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="absolute top-0 left-0 w-full z-20 text-black px-20 py-5 ">
      <div className="max-w-full px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* LEFT: Logo + Links (hidden on mobile) */}
        <div className="flex items-center space-x-8">
          <img className="h-8 w-auto" src="/placeholder.svg" alt="Logo" />
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-lg text-gray-700 font-normal hover:text-gray-900">
              <span className="border-b border-gray-400 pb-0.5">Shop</span>
            </a>
            <a href="#" className="text-lg text-gray-700 font-normal hover:text-gray-900">
              <span className="border-b border-gray-400 pb-0.5">Downloads</span>
            </a>
            <a href="#" className="text-lg text-gray-700 font-normal hover:text-gray-900">
              <span className="border-b border-gray-400 pb-0.5">Blogs</span>
            </a>
          </div>
        </div>

        {/* CENTER: Empty Spacer */}
        <div className="flex-1"></div>

        {/* RIGHT: Badge Button on larger screens, Hamburger on mobile */}
        <div className="flex items-center">
          {/* Badge button - hidden on smallest screens */}
          <button onClick={handleBadgeClick} className="hidden sm:block">
            <img
              src="https://busy.bar/img/tild6666-3736-4034-a566-653938386632__badge_grey.svg"
              alt="Badge"
              className="h-16 w-auto"
            />
          </button>

          {/* Hamburger menu for mobile */}
          <button onClick={toggleMenu} className="sm:hidden p-2 focus:outline-none" aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg absolute top-16 right-0 left-0 z-30">
          <div className="px-4 py-3 space-y-3">
            <a href="#" className="block text-lg text-gray-700 py-2 border-b border-gray-100">
              Shop
            </a>
            <a href="#" className="block text-lg text-gray-700 py-2 border-b border-gray-100">
              Downloads
            </a>
            <a href="#" className="block text-lg text-gray-700 py-2">
              Blogs
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
