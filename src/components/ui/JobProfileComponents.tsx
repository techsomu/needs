"use client";
import React, { useState } from "react";
import { FaUserCircle, FaPhone } from "react-icons/fa";

interface JobProfileCardProps {
  id: string;
  name: string;
  jobRole: string;
  services: string[];
  workLocation: string;
  phoneNumber: string;
}

const JobProfileCard: React.FC<JobProfileCardProps> = ({
  id,
  name,
  jobRole,
  services,
  workLocation,
  phoneNumber,
 
}) => {
  const handleCallNowClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="job-profile-card border rounded-md p-6 shadow-lg bg-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center mb-4">
        <FaUserCircle className="text-5xl text-gray-600 mr-4" />
        <div>
          <div className="id text-sm text-gray-500">ID: {id}</div>
          <h2 className="name text-2xl font-bold mb-1 font-sans text-gray-800">
            {name}
          </h2>
        </div>
      </div>
      <div className="job-role text-lg font-medium mb-4 font-sans text-gray-700">
        Role: {jobRole}
      </div>
      <div className="services text-sm mb-4">
        <strong>Services:</strong>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          {services.map((service, index) => (
            <li key={index} className="font-sans">
              {service}
            </li>
          ))}
        </ul>
      </div>
      <div className="work-location text-sm mb-4 font-sans text-gray-700">
        <strong>Location:</strong> {workLocation}
      </div>

      <button
        onClick={handleCallNowClick}
        className="call-now-button w-30 bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 transition-colors duration-300 ease-in-out"
      >
        Call Now
      </button>
    </div>
  );
};

interface JobProfileGridProps {
  profiles: JobProfileCardProps[];
}

const JobProfileGrid: React.FC<JobProfileGridProps> = ({ profiles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-50 min-h-full">
      {profiles.map((profile) => (
        <JobProfileCard key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default JobProfileGrid;
