'use client';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import NewsletterForm from './NewsletterForm';
import Card from './Card4';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white p-8 w-full mt-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-semibold text-lg">Address</h3>
        <p>Rajahmundry,</p>
        <p>East Godavari District.</p>
        <p>Andhra Pradesh.</p>
      </div>


      <div>
        <h3 className="font-semibold text-lg">Contact</h3>
        <p>Email: example@domain.com</p>
        <p>Phone:+91</p>
      </div>
<div >
<div className="font-extrabold text-2xl text-center md:text-xl mb-2">
      <h4 className="font-semibold text-lg mb-3">Follow us on</h4>
      {/* social media links */}
      <Card />
      
    </div>
</div>
      {/* newsletterform */}
      <NewsletterForm />


      {/* feedback form */}

      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 grid grid-cols-6 gap-3 rounded-xl p-4 text-sm shadow-lg hover:shadow-xl transition-all duration-300">
  <h1 className="text-center bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent text-2xl font-bold col-span-6 mb-2">
    Send Feedback
  </h1>
  <input
    type="text"
    className="bg-slate-50/80 text-slate-600 placeholder:text-slate-400 border border-slate-200 col-span-3 outline-none rounded-lg p-3 duration-300 hover:bg-slate-50 focus:border-slate-600 focus:ring-2 focus:ring-slate-200 focus:shadow-inner"
    placeholder="Your phone number..."
  />
  <input
    type="text"
    className="bg-slate-50/80 text-slate-600 placeholder:text-slate-400 border border-slate-200 col-span-3 outline-none rounded-lg p-3 duration-300 hover:bg-slate-50 focus:border-slate-600 focus:ring-2 focus:ring-slate-200 focus:shadow-inner"
    placeholder="City/Location..."
  />
  <textarea
    className="bg-slate-50/80 text-slate-600 h-32 placeholder:text-slate-400 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-3 duration-300 hover:bg-slate-50 focus:border-slate-600 focus:ring-2 focus:ring-slate-200 focus:shadow-inner"
    placeholder="Your feedback..."
    defaultValue={""}
  />
  <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-3 duration-300 bg-slate-50/80 hover:bg-slate-100 hover:border-slate-600 active:scale-95 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200 hover:shadow-md group">
    <svg className="transform transition-transform group-hover:scale-110 duration-200" viewBox="0 0 512 512" height="20px" xmlns="http://www.w3.org/2000/svg">
      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </svg>
  </button>
  <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-3 duration-300 bg-slate-50/80 hover:bg-slate-100 hover:border-slate-600 active:scale-95 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200 hover:shadow-md group">
    <svg className="transform transition-transform group-hover:scale-110 duration-200" viewBox="0 0 512 512" height="20px" xmlns="http://www.w3.org/2000/svg">
      <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </svg>
  </button>
  <span className="col-span-2" />
  <button className="bg-slate-50/80 stroke-slate-600 border border-slate-200 col-span-2 flex items-center justify-center gap-2 rounded-lg p-3 duration-300 hover:bg-slate-100 hover:border-slate-600 active:scale-95 focus:stroke-blue-200 focus:bg-blue-400 hover:shadow-md group">
    <svg className="transform transition-transform group-hover:translate-x-1 duration-200" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
      <path d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.11 13.6501L13.69 10.0601" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="font-medium text-slate-600 group-hover:text-slate-800">Send</span>
  </button>
</div>

    </div>
    
    <div className="text-center mt-5 mb-10 text-sm">
      <p>Disclaimer: All information provided on this site is for informational purposes only.</p>
    </div>
  </footer>
);

export default Footer;
