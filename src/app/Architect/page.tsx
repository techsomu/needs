"use client";
import React from "react";
import Layout from "@/components/ui/Layout";
import CarouselPage from "@/components/ui/Carousela";

const Architect: React.FC = () => {
  return (
    <Layout>
      {/* carousela */}
      <CarouselPage />
      <div className="card h-auto   bg-[#07182E] rounded-2xl mb-4 mt-3 shadow-md p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto overflow-hidden relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,183,255,0.5)]">
        <div className="card-content p-4 relative z-10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-xl shadow-lg mr-3 border-2 border-white/20 bg-blue-500 flex items-center justify-center text-white font-bold text-[0.6rem] leading-tight">
              <div className="text-center">
                Architect
                <br />
                Interior Design
              </div>
            </div>
            <div>
              <h2
                title="SuperApp"
                className="text-lg font-bold text-white/90 truncate"
              >
                Architect
              </h2>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block bg-green-500/20 text-green-300/90">
                Available
              </span>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xs font-bold text-white mb-2">
              Core Services
            </h3>
            <div className="flex flex-wrap -mx-1">
              <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/100 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                Architectural Designs
              </div>
              <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/100 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                Interior Designing
              </div>
              <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/100 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                Exterior Designing
              </div>
              <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/100 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                ReInnovation
              </div>
              
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xs font-bold text-white mb-2">
              Other Features
            </h3>
            <ul className="text-xs text-white/100 grid grid-cols-1 gap-1">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-3 h-3 mr-1 text-white/100"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                <span title="Dark Mode" className="truncate">
                  {" "}
                  7+Years Professional Experience
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-3 h-3 mr-1 text-white/100"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                <span title="Custom Themes" className="truncate">
                  Affordable Pricing
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-3 h-3 mr-1 text-white/100"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                <span title="Password Protection" className="truncate">
                  Premium Designs
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-3 h-3 mr-1 text-white/100"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                <span title="Data Export" className="truncate">
                  Online Consultaion
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  className="w-3 h-3 mr-1 text-white/100"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                <span title="Widgets" className="truncate">
                  180+ Projects Completed Successfully
                </span>
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center space-x-2">
            <button className="flex-1 bg-indigo-500 text-white/100 rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center border border-white/20">
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              Call Now
            </button>
            <button className="flex-1 bg-green-400 text-gray-900 rounded-lg px-3 py-2 text-xs font-medium transition duration-300 ease-in-out hover:bg-white/30 flex items-center justify-center">
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              Whatspp
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Architect;
