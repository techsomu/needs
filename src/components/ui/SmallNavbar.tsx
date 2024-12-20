// components/SmallNavbar.tsx
"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const categories = [
  {
    main: "Home Appliances",
    subcategories: ["Repair Services", "Installation", "Cleaning Services"],
  },
  {
    main: "Construction",
    subcategories: ["Architects", "Civil Engineers", "Contractors"],
  },
  {
    main: "Event Management",
    subcategories: ["Wedding Planners", "Party Organizers", "Catering Services"],
  },
  {
    main: "Education",
    subcategories: ["Tutors", "Coaching Centers", "Online Classes"],
  },
  {
    main: "Brahmin Services",
    subcategories: ["Pooja Services", "Astrology", "Vedic Rituals"],
  },
];

const SmallNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 shadow-md">
      <div className="container mx-auto p-2 flex items-center justify-between">
        {/* Menu Items */}
        <div className="flex space-x-6 items-center">
          {/* All Categories with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-700 font-medium hover:text-blue-600"
            >
              All Categories
              <ChevronDownIcon className="w-5 h-5 ml-1" />
            </button>

            {/* Dropdown Popup */}
            {isOpen && (
              <div className="absolute mt-2 w-72 bg-white border rounded-md shadow-lg z-50">
                <div className="p-4 grid grid-cols-1 gap-4 max-h-96 overflow-y-auto">
                  {categories.map((category, index) => (
                    <div key={index} className="border-b pb-2">
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">
                        {category.main}
                      </h3>
                      <ul className="space-y-1">
                        {category.subcategories.map((sub, idx) => (
                          <li key={idx}>
                            <Link
                              href={`/${category.main.toLowerCase().replace(/ /g, "-")}/${sub.toLowerCase().replace(/ /g, "-")}`}
                              className="text-gray-700 hover:text-blue-500 block"
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other Menu Items */}
          <Link href="/home-appliances" className="text-gray-700 hover:text-blue-600">
            Home Appliances Services
          </Link>
          <Link href="/construction" className="text-gray-700 hover:text-blue-600">
            Construction
          </Link>
          <Link href="/event-management" className="text-gray-700 hover:text-blue-600">
            Event Management
          </Link>
          <Link href="/education" className="text-gray-700 hover:text-blue-600">
            Education
          </Link>
          <Link href="/brahmin-services" className="text-gray-700 hover:text-blue-600">
            Brahmin Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallNavbar;
