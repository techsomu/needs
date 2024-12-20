'use client';
import React from "react";
import Link from "next/link";
import Layout from "@/components/ui/Layout";

const ServicesPage: React.FC = () => {
  return (
    <Layout>
    <div className="bg-blue-50 min-h-screen p-8 flex justify-center items-center">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold mb-4 text-center text-blue-900">Our Services</h1>
        <div className="flex flex-col space-y-3">
          {[
            { name: "Architect", link: "/Architect" },
            { name: "CCTV", link: "/CCTV" },
            { name: "WebDeveloper", link: "/WebDeveloper" },
            { name: "Electrician", link: "/Electrician" },
            { name: "Home Appliances", link: "/Home Appliances" },
            { name: "Plumber", link: "/Plumber" },
            { name: "Carpenter", link: "/Carpenter" },
            { name: "Painter", link: "/Painter" },
            { name: "Tailor", link: "/Tailor" },
            { name: "Tutor", link: "/Tutor" },
            { name: "Tours & Travels", link: "/Tours & Travels" },
            { name: "Transport", link: "/Transport" },
            { name: "Carrers", link: "/Carrers" },
          ].map((service) => (
            <Link
              key={service.name}
              href={service.link}
              className="block px-4 py-3 text-center text-blue-900 border border-gray-300 rounded-md hover:bg-blue-500 hover:text-white transition duration-200"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ServicesPage;
