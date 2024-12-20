// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { MapPinIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import axios from "axios";

const Navbar = () => {
  const [location, setLocation] = useState<string>("Detecting location...");
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  // Automatically detect the user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const res = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${apiKey}`
            );
            const placeName = res.data.results[0]?.formatted_address || "Location not found";
            setLocation(placeName);
          } catch (error) {
            console.error("Error fetching location:", error);
            setLocation("Location not found");
          }
        },
        () => setLocation("Location not found")
      );
    }
  }, [apiKey]);

  // Handle search input and suggestions
  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      try {
        const res = await axios.get(
          `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${e.target.value}&key=${apiKey}`
        );
        setSuggestions(res.data.predictions || []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const selectLocation = (description: string) => {
    setLocation(description);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Company Name */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Service2U
        </Link>

        {/* Location Selector */}
        <div className="relative">
          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={query || location}
              onChange={handleSearchChange}
              placeholder="Select your location"
              className="border-b-2 border-gray-300 focus:outline-none ml-2"
            />
            <ChevronDownIcon className="w-5 h-5 ml-1 cursor-pointer" />
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute top-10 left-0 w-full bg-white border shadow-md max-h-60 overflow-y-auto z-10">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => selectLocation(suggestion.description)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {suggestion.description}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search services..."
            className="border rounded-l-md px-4 py-2 w-72"
          />
          <button className="bg-blue-500 text-white rounded-r-md p-2">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button className="flex items-center text-gray-600">
            English
            <ChevronDownIcon className="w-5 h-5 ml-1" />
          </button>
        </div>

        {/* Login and Partner Button */}
        <div className="flex items-center space-x-4">
          <Link href="/auth" className="text-blue-600 hover:underline">
            Login
          </Link>
          <Link href="/partner-form">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Partner with Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
