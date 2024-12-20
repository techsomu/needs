'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-white text-2xl  focus:outline-none md:hidden"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-gray-800 text-white transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col items-center py-6  space-y-4">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-400">
            About
          </Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-400">
            Services
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
