import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
  FaMobileAlt,
  FaLaptopCode,
  FaBullhorn,
  FaConnectdevelop,
  FaPlug,
  FaMailchimp,
  FaHouseUser,
  FaShower,
  FaCartPlus,
  FaPhoenixFramework,
  FaHammer,
} from "react-icons/fa";
import Head from "next/head";
import { Cctv } from "lucide-react";

const MenuGrid = () => {
  return (
    <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <Link
        href="/Architect"
        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-400 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <FaHome size={48} className="mb-2 text-blue-600" />
        <span className="text-lg font-semibold font-[Poppins]">Architect & Interior Design</span>
      </Link>
      <Link
        href="/CC Cameras"
        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-400 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <Cctv size={48} className="mb-2 text-green-600" />
        <span className="text-lg font-semibold font-[Poppins]">CC Cameras</span>
      </Link>
      <Link
        href="/WebSite Design"
        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-400 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <FaLaptopCode size={48} className="mb-2 text-purple-600" />
        <span className="text-lg font-semibold font-[Poppins]">WebSite Design</span>
      </Link>
      <Link
        href="/Electrician"
        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-400 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <FaPlug size={48} className="mb-2 text-red-600" />
        <span className="text-lg font-semibold font-[Poppins]">Electrician</span>
      </Link>
      <Link
        href="/Home Appliances"
        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-400 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <FaHouseUser size={48} className="mb-2 text-yellow-600" />
        <span className="text-lg font-semibold font-[Poppins]">
        Home Appliances
        </span>
      </Link>
      <Link
        href="/services/Plumber"
        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-400 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <FaShower size={48} className="mb-2 text-indigo-600" />
        <span className="text-lg font-semibold font-[Poppins]">
        Plumber
        </span>
      </Link>
      <Link
        href="/services/Carpenter"
        className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-400 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <FaHammer size={48} className="mb-2 text-pink-600" />
        <span className="text-lg font-semibold font-[Poppins]">
        Carpenter
        </span>
      </Link>
    </div>
  );
};

export default MenuGrid;
