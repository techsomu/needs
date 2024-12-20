"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <header
        className="relative flex items-center justify-center h-[20vh] sm:h-[70vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.svg')" }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}

        {/* Content */}
        {/* <div className="relative text-center text-white px-4 sm:px-8 max-w-3xl mx-auto"> */}
        {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 mt-3 leading-tight"> */}
        {/* Welcome to Our Website */}
        {/* </h1> */}
        {/* <p className="text-base sm:text-lg lg:text-xl mb-6 leading-relaxed"> */}
        {/* Find everything you need here with our wide range of services tailored to your needs. */}
        {/* </p> */}
      </header>
      {/* Search Bar Below Hero */}
      <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 pt-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-sm sm:w-2/3 lg:w-1/2 px-4 py-2 text-black rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button className="w-28 h-10 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
          Search
        </button>
      </div>
    </>
  );
};

export default Hero;
