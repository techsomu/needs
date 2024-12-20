import React from 'react';
import JobProfileGrid from './JobProfileComponents';

const profiles = [
  {
    id: '1',
    name: 'Soma Sekhar',
    jobRole: 'Software Developer',
    services: ['Frontend Development', 'Backend Development'],
    workLocation: 'Rajahmndry',
    phoneNumber: '+919652575313',
  },
  {
    id: '2',
    name: 'SasiKanth',
    jobRole: 'Project Manager',
    services: ['Team Management', 'Client Communication','Online Consultation'],
    workLocation: 'Rajahmudry',
    phoneNumber: '+918897390906',
  },
 
  // Add more profiles as needed
];

const JobProfilesPage: React.FC = () => {
  return (
    <div className="bg-gray-300 mt-2 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Developer Profiles</h1>
      <JobProfileGrid profiles={profiles} />
    </div>
  );
};

export default JobProfilesPage;
