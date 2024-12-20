'use client';
import React from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope, FaWhatsapp, FaHandshake, FaBookReader } from 'react-icons/fa';
import { Wrench } from 'lucide-react';
import PartnerForm from './Partnerform';


const BottomBar: React.FC = () => {
  
  return (
    <div className="bg-gray-700 text-white fixed bottom-0 w-full flex justify-around items-center py-3 sm:hidden">
      <Link href="/Blog" className="flex flex-col items-center text-sm hover:text-gray-400">
        <FaBookReader size={24} />
        <span>Blog</span>
      </Link>
      
      <div className="flex flex-col items-center text-sm hover:text-gray-400">
        <PartnerForm />
      
        </div>
      <Link href="/ServicesPage" className="flex flex-col items-center text-sm hover:text-gray-400">
        <Wrench size={24} />
        <span>Services</span>
      </Link>
      <Link href="https://wa.me/919652575313" className="flex flex-col items-center text-sm hover:text-gray-400">
        <FaWhatsapp size={24} />
        <span>Contact</span>
      </Link>
    </div>
  );
};

export default BottomBar;
