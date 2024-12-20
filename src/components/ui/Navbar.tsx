'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

import PartnerWithUs from "./partnerWithUs";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false); // Ensure Services submenu is closed
  };

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav className="bg-gray-700 shadow-lg p-4 flex justify-between items-center w-full fixed top-0 z-50">
      <Link href="/" className="text-lg font-semibold text-white" onClick={closeMenu}>
        Needs
      </Link>
      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-gray-900 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:static md:flex md:transform-none md:space-x-6 md:bg-transparent md:w-auto w-3/4 flex flex-col md:flex-row items-center pt-16 md:pt-0`}
      >
        <Link href="/" className="hover:text-gray-300 text-white p-4 md:p-0" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/About" className="hover:text-gray-300 text-white p-4 md:p-0" onClick={closeMenu}>
          About
        </Link>
        <div className="relative md:static">
          <button
            onClick={toggleServices}
            className="flex items-center hover:text-gray-300 text-white p-4 md:p-0"
          >
            Services <FaChevronDown className="ml-1" />
          </button>
          <div
            className={`absolute left-0 md:left-auto bg-white text-black w-full md:w-64 shadow-lg mt-2 rounded max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ${
              isServicesOpen ? "block" : "hidden"
            }`}
          >
            {[
              { name: "Architect", link: "/Architect" },
              { name: "CCTV", link: "/CCTV" },
              { name: "WebDeveloper", link: "/WebDeveloper" },
              { name: "Electrician", link: "/Electrician" },
              { name: "Home Appliances", link: "/HomeAppliances" },
              { name: "Plumber", link: "/Plumber" },
              { name: "Carpenter", link: "/Carpenter" },
              { name: "Painter", link: "/Painter" },
              { name: "Tailor", link: "/Tailor" },
              { name: "Tutor", link: "/Tutor" },
              { name: "Tours & Travels", link: "/Tours & Travels" },
              { name: "Transport", link: "/Transport" },
              { name: "Careers", link: "/Careers" },
            ].map((service) => (
              <Link
                key={service.name}
                href={service.link}
                className="block px-4 py-2 mb-2 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-md shadow-md"
                onClick={closeMenu}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/Careers" className="hover:text-gray-300 text-white p-4 md:p-0" onClick={closeMenu}>
          Careers
        </Link>
        <div className="mt-4 md:mt-0 hidden md:block">
          <PartnerWithUs />
        </div>

        <a
          href="https://wa.me/919652575313"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0 text-green-500 hover:text-green-700"
        >
          <FaWhatsapp size={28} />
          </a>
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 md:hidden text-white hover:text-red-500"
        >
          <FaTimes size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;